import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";

// 修改store
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// 获取store
export const useAppSelector = useSelector.withTypes<RootState>();
