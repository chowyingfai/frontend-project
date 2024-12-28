import Table from 'react-bootstrap/Table';
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import {CartItemDto} from "../../../../data/cartItem/cartItem.type.ts";

type Props ={
    dtoList:CartItemDto[]
}
export default function ShoppingCartTable({dtoList}:Props){
    return(
        <Table className={"align-middle"}  striped bordered hover>
            <thead>
            <tr>
                <th></th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>SubTitle</th>
                <th></th>

            </tr>
            </thead>
            <tbody>
            {
               dtoList.map((dto) =>(
                    <ShoppingCartTableRow dto={dto} key={dto.pid}/>
                    ))
            }

            </tbody>
        </Table>
    );
}