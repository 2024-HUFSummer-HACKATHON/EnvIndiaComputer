import axiosInstance from "../axiosinstance";

async function getHallInfo(month){
    try{
        const response = await axiosInstance.get(
            `http://3.38.234.33:8000/api/accounts/fame/${month}/`,{}
        )
        return response.data;
    } catch (error) {
        console.log('오류 발생', error);
    }
}
export default getHallInfo;