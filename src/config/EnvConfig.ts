import DevConfig from "./DevConfig.ts";
import ProductionConfig from "./ProductionConfig.ts";

export default function getEnvConfig(){
    if(!process.env.NODE_ENV || process.env.NODE_ENV === "development"){
        return DevConfig;
    }else{
        return ProductionConfig;
    }
}