import Table from 'react-bootstrap/Table';
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";
import {CartItemDto} from "../../../../data/cartItem/cartItem.type.ts";

type Props ={
    dtoList:CartItemDto[],
    handleQuantityChange:(pid:number , quantity:number) =>void
    handleDelete:(pid:number) => void
}
export default function ShoppingCartTable({dtoList,handleDelete,handleQuantityChange}:Props){
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
                    <ShoppingCartTableRow
                        key={dto.pid}
                        dto={dto}
                        handleQuantityChange={handleQuantityChange}
                        handleDelete={handleDelete}
                    />
                    ))
            }

            </tbody>
        </Table>
    );
}