import axios from "axios";
import {TransactionDto} from "../data/transaction/transactionDto.type.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"

const baseUrl = "http://localhost:8080";

export async function getTransactionByTid(tid:string){
    const response = await axios.get<TransactionDto>(
        `${baseUrl}/transaction/${tid}`,
        await FirebaseAuthService.getAuthConfig()
    );

    return response.data;
}

export async function postTransaction(){
    const response = await axios.post<TransactionDto>(
        `${baseUrl}/transaction/prepare`,
        undefined,
        await FirebaseAuthService.getAuthConfig()
    )
    return response.data;
}

export async function finishTransaction(tid:string){
    await axios.patch(
        `${baseUrl}/transaction/${tid}/pay`,
        undefined,
        await FirebaseAuthService.getAuthConfig()
    );

    await axios.patch(
        `${baseUrl}/transaction/${tid}/finish`,
        undefined,
        await FirebaseAuthService.getAuthConfig()
    )


}