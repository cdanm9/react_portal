import * as React from 'react';
import Box from '@mui/material/Box';

import { DataGrid, GridColDef
  } from '@mui/x-data-grid';


import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CancelIcon from '@mui/icons-material/Cancel';
import MessageIcon from '@mui/icons-material/Message';

import MessageButton from 'components/fragments/MessageButton'
import { useLoaderData } from "react-router";



import {getRequestInfo,getCheckServiceAvailablity} from "../api/index";


interface RequestInfo {
  ACK_VALIDATION: string | null;
  ACTIVITY_TYPE: string | null;
  APPROVER_LEVEL: string | null;
  APPROVER_ROLE: string | null;
  BP_TYPE_CODE: string;
  BP_TYPE_DESC: string;
  BUSINESS_TYPE: string;
  BUYER_ASSIGN_CHECK: string | null;
  COMMENT: string;
  COMPLETED_BY: string;
  COMPLETED_BY_POSITION: string;
  CREATED_ON: string; // ISO Date string
  CREATION_TYPE: number;
  ENTITY_CODE: string;
  ESTAB_YEAR: string;
  ICV_CHECK: string | null;
  ICV_DATE: string | null;
  ICV_SCORE: string | null;
  IVEN_VENDOR_CODE: string;
  LAST_ACTIVE_REQ_NO: string | null;
  LAST_SAVED_STEP: number;
  LAST_UPDATED_ON: string; // ISO Date string
  LEGACY_ID: string | null;
  LEGAL_STRUCTURE: string | null;
  LEGAL_STRUCTURE_OTHER: string;
  MDG_CR_NO: string | null;
  NDA_TYPE: string | null;
  NO_OF_ADMIN: number | null;
  NO_OF_EMP: number;
  NO_OF_ENGG: number | null;
  NO_OF_OTHERS: number | null;
  NO_OF_PROD: number | null;
  NO_OF_QUALITY: number | null;
  ORDER_SIZE_MAX: number | null;
  ORDER_SIZE_MIN: number | null;
  OT_FOLDER1_ID: string | null;
  OT_FOLDER2_ID: string | null;
  OT_FOLDER3_ID: string | null;
  OT_FOLDER4_ID: string | null;
  OT_PARENT_ID: string | null;
  PROCESS_LEVEL: string | null;
  REGISTERED_ID: string;
  REMINDER_COUNT: number | null;
  REQUESTER_ID: string;
  REQUEST_NO: string;
  REQUEST_RESENT: string | null;
  REQUEST_TYPE: number;
  SAP_VENDOR_CODE: string | null;
  SECONDARY_EMAILS_ID: string | null;
  STATUS: number;
  SUBMISSION_DATE: string; // ISO Date string
  SUPPL_CATEGORY: string;
  SUPPL_CATEGORY_DESC: string;
  SUPPL_TYPE: string;
  SUPPL_TYPE_DESC: string;
  TOTAL_PROD_CAPACITY: number | null;
  TRADE_LIC_NO: string;
  TRADE_LIC_NO_DATE: string | null;
  VAT_CHECK: string | null;
  VAT_REG_DATE: string | null;
  VAT_REG_NUMBER: string | null;
  VENDOR_CODE: string;
  VENDOR_NAME1: string;
  VENDOR_NAME2: string | null;
  WEBSITE: string | null;
  TO_HIERARCHY: any|null;
  TO_STATUS?: any|null;         
  TO_ENTITY_CODE?: any|null;       
  TO_REQUEST_TYPE?: any|null;       
}


export interface RequestInfoRow extends RequestInfo {
  id: number;
  TO_STATUS_CODE:string;
}


const columns: GridColDef<RequestInfoRow>[] = [
  { field: 'id', headerName: 'Request No.', width: 100 ,hideable:true,
    renderCell:(params)=>{
      const {REQUEST_NO,TO_REQUEST_TYPE}=params.row
      return (
        
        <Box style={{whiteSpace:'pre-line'}}>
          <strong>
            {REQUEST_NO+'\n'}
          </strong>
          {TO_REQUEST_TYPE?.DESCRIPTION}
        </Box>
      )
    }
  },   
  {
    field: 'VENDOR_NAME1',
    headerName: 'Vendor',
    width: 100,
    editable: false,
  },    
  {
    field: 'COMPANY_NAME',
    headerName: 'Company',
    width: 100,
    editable: false,
    renderCell: (params) => {
      const { BUTXT, BUKRS } = params?.row?.TO_ENTITY_CODE;
      return (
        <Box style={{ whiteSpace: 'pre-line' }}>
          {`${BUTXT}\n${BUKRS}`}
        </Box>
      );
    }
    
  },    
  {
    field: 'REGISTERED_ID',
    headerName: 'E-Mail',
    width: 225,     
    editable: false,
  },
  {
    field: 'SUPPL_TYPE_DESC',
    headerName: 'Vendor Type',
    width: 100,
    editable: false,
  },
  {
    field: 'BP_TYPE_DESC',
    headerName: 'Vendor Sub Type',
    width: 150,
    editable: false,   
  },
  {
    field: 'REQUESTER_ID',
    headerName: 'Requested By / Date',
    width: 240,
    editable: false,
    renderCell:(params)=>{
      const {REQUESTER_ID,CREATED_ON}=params.row;
      const sFormattedDate=CREATED_ON.toString().split('T')[0].replaceAll('-','.')
      return (
      <Box style={{whiteSpace:'pre-line'}}>
        <strong>{REQUESTER_ID+'\n'}</strong>
        {sFormattedDate}
      </Box>
      )
    }
  },
  {
    field: 'TO_STATUS_DESC',
    headerName: 'Status',
    width: 150,
    editable: false
  },
  {
    field: 'APPROVER_ROLE',
    headerName: 'Comment',
    width: 50,
    editable: false,
    renderCell:()=>(
      <Box>
        <MessageButton/>
      </Box>
    )
  },
  {
    field:'APPROVER_LEVEL',
    headerName:'Action',
    width:150,
    renderCell:()=>(
      <Box>
        <IconButton>
          <AddTaskIcon/>
        </IconButton>
        <IconButton>
          <CancelIcon/>
        </IconButton>
      </Box>
    )
  }
];


export default function MasterReqAppr() {

  const [rows, setRows] = React.useState<RequestInfoRow[]>([]);
  const [pageLoader, setPageLoader] = React.useState<boolean>(true)

  // const { value } = useLoaderData();
  

  React.useEffect(() => {
    const oCheckServiceAvailability=async ()=>{
      const value = await getCheckServiceAvailablity();
      console.log(value)
      return value; 
    }
    const fetchData = async () => {
      const data = await getRequestInfo();
      const typedData: RequestInfoRow[] = data.map((item: RequestInfo, index: number) => ({
        ...item,
        id: item.REQUEST_NO,
        COMPANY_NAME:item.TO_ENTITY_CODE.BUTXT,
        TO_STATUS_DESC:item.TO_STATUS.DESCRIPTION+(item?.TO_HIERARCHY?.USER_ROLE ? ' - '+item?.TO_HIERARCHY?.USER_ROLE :'')   
      }));
      setRows(typedData);
      setPageLoader(false);
    };
    oCheckServiceAvailability();
    fetchData();   
  }, []);
  
  return (
    <Box sx={{ height: '500px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowHeight={() => 'auto'}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}    
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        showToolbar
        loading={pageLoader}
        slotProps={{
          loadingOverlay: {
            variant: 'linear-progress',
            noRowsVariant: 'skeleton',
          },
        }}
      />
    </Box>
  );
}


