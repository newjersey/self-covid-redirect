import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res = {
        status: 302,
        headers: {
            location: 'https://covid19.nj.gov/forms/self'
        }
    };

};

export default httpTrigger;
