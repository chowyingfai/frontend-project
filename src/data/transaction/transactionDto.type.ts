export interface TransactionDto {
    tid:       number;
    dataTime:  string;
    status:    string;
    total:     number;
    buyer_uid: number;
    items: TransactionItem[];
}

export interface TransactionItem {
    tpid:     number;
    product:  TransactionProduct;
    quantity: number;
    subtotal: number;
}

export interface TransactionProduct {
    pid:         number;
    name:        string;
    description: string;
    imageUrl:    string;
    price:       number;
    stock:       number;
}
