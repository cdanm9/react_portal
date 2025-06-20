
import axios, { AxiosInstance } from 'axios';

var baseURL = 'IVEN_DB/odata/v4/request-process';
const additionalBaseURL  = 'IVEN_DB/odata/v4/addtional-process';

const instance2: AxiosInstance = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (param: string | number | boolean) => encodeURIComponent(param).replaceAll("%20", " "),
  },
});

const instance: AxiosInstance = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (param: string | number | boolean) => encodeURIComponent(param).replaceAll("%20", " "),
  },
});

export const getMasterIvenUsersData = async (
  params: { $top: number; $skip: number } = { $top: 100, $skip: 0 }
): Promise<any> => {
  const { data } = await instance.get('/MasterIvenUsers', {
    params,
  });

  // Return parsed data (handling various formats)
  return data.d?.results || data.d || data.value;
};

export const getMasterUserRole= async (): Promise<any> => {
  const { data } = await instance.get('/MasterUserRole', {
  });

  // Return parsed data (handling various formats)
  return data.d?.results || data.d || data.value;
};

export const getRequestInfo= async (): Promise<any> => {
  const userId = 'siddhesh.d@intellectbizware.com';
  // const params: Record<string, string > = {   
  //   // $filter: "((ENTITY_CODE eq '9100') or (ENTITY_CODE eq '1001') or (ENTITY_CODE eq '1010') or (ENTITY_CODE eq '2000') or (ENTITY_CODE eq 'R450') or (ENTITY_CODE eq '3000') or (ENTITY_CODE eq '4000') or (ENTITY_CODE eq '1000')) and ((STATUS eq 1) or (STATUS eq 15)) and (TO_HIERARCHY/USER_ID eq '"+userId+"')",
  //   $filter: "",
  //   $expand: 'TO_STATUS,TO_ENTITY_CODE,TO_HIERARCHY',
  // };
  const params: {$skip:number,$top:number,$expand:string;$orderby:string;}= {   
    $skip:0,
    $top:100,  
    $expand: 'TO_STATUS,TO_ENTITY_CODE,TO_HIERARCHY,TO_REQUEST_TYPE',
    $orderby: 'REQUEST_NO desc' 
  };
  // const params = {
  //   $filter: `(
  //     (ENTITY_CODE eq '9100') or 
  //     (ENTITY_CODE eq '1001') or 
  //     (ENTITY_CODE eq '1010') or 
  //     (ENTITY_CODE eq '2000') or 
  //     (ENTITY_CODE eq 'R450') or 
  //     (ENTITY_CODE eq '3000') or 
  //     (ENTITY_CODE eq '4000') or 
  //     (ENTITY_CODE eq '1000')
  //   ) and (
  //     (STATUS eq 1) or (STATUS eq 15)
  //   ) and (
  //     TO_HIERARCHY/USER_ID eq '${userId}'
  //   )`,
  //   $expand: 'TO_STATUS,TO_ENTITY_CODE,TO_HIERARCHY',
  // };

  const { data } = await instance.get('/RequestInfo',{params:params});

  // Return parsed data (handling various formats)
  return data.d?.results || data.d || data.value;
};

export const getMasterEntityCode= async (): Promise<any> => {
  const { data } = await instance.get('/MasterEntityCode', {
  });

  // Return parsed data (handling various formats)
  return data.d?.results || data.d || data.value;
};

// ✅ Step 4: Function to get user count
export const getMasterIvenUsersCount = async (): Promise<number> => {
  const { data } = await instance.get('/MasterIvenUsers/$count');
  return data;
};

export const getCheckServiceAvailablity = async (): Promise<any> => {
  const url=''+additionalBaseURL+'/checkServiceAvailability(cloudSrv=true,onPremiseSrv=false)'
  // const sCloudSrv=true,sOnPremiseSrv=true
  const result = await fetch(url)
  return result;
};


// const fetchData = async () => {
//   const res = await fetch(url);
//   return data.d?.results || data.d || data.value;
// };
