import Table from "react-bootstrap/Table";
import CheckoutTableRow from "../CheckoutTableRow";
import {TransactionDto} from "../../../../../data/transaction/transactionDto.type.ts";

type Props = {
    dto:TransactionDto
}

export default function CheckoutTable({dto}:Props){

    return(
        <>
            <Table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                </tr>
                </thead>
                <tbody>
                {
                    dto.items.map((item)  =>(
                        <CheckoutTableRow  key={item.tpid} item={item}/>
                    ))
                }
                </tbody>
            </Table>
        </>

    );
}