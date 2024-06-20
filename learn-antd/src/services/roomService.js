import { del, get, post } from "../utils/request";

export const createRoom = async (options) => {
  // path là đường dẫn database
  const result = await post("rooms", options);
  return result;
};  

export const getListRoom = async()=>{
  const result = await get("rooms");
  return result;
}
export const deleteRoom=async(id)=>{
  const result = await del(`rooms/${id}`);
  return result;
}