import axios, { AxiosInstance } from 'axios';

const baseURL = 'IVEN_DB/odata/v4/fiori-user-master';

const instance: AxiosInstance = axios.create({
  baseURL,
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


