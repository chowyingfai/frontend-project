import TopNavBar from "../../component/TopNavBar";

export default function ErrorPage(){

    return(
        <>
            <TopNavBar/>
            <div style={{height: "85vh"}}
                 className={"d-flex justify-content-center align-items-center"}
            >
                {/*//error page*/}
                <img height={480} src={"https://i.fbcd.co/products/resized/resized-750-500" +
                    "/2211-cat-error-pag-mainpreview-6f956686a" +
                    "409c29be1198b21d9d35068de55d7de44aaf81740" +
                    "283ec2253982ac.jpg"}/>
            </div>

        </>
    );
}