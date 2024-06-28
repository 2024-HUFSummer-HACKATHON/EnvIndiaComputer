import axiosInstance from "../axiosinstance";

async function getDetailInfo(){
    try{
        const response = await axiosInstance.get(
            `/api/donates/detail//6`,{}
        )
        return response.data;
    } catch (error) {
        console.log('오류 발생', error);
    }
}
export default getDetailInfo;