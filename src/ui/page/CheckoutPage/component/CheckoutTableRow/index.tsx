import {TransactionItem} from "../../../../../data/transaction/transactionDto.type.ts";

type Props = {
    item:TransactionItem
}
export default function CheckoutTableRow({item}:Props){

    return(
        <>
        <tr>
            <td>
                <img
                    height={180}
                    src={item.product.imageUrl}
                />
            </td>
                <td>{item.product.name}</td>
                <td>${item.product.price.toLocaleString()}</td>
                <td>{item.quantity}</td>
                <td>${item.subtotal.toLocaleString()}</td>
        </tr>

</>
    );
}