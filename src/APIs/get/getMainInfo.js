import axiosInstance from "../axiosinstance";

async function getMainInfo(){
    try{
        const response = await axiosInstance.get(
            `/api/donates/main/6`,{}
        )
        return response.data;
    } catch (error) {
        console.log('오류 발생', error);
    }
}
export default getMainInfo;