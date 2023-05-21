import EmptyState from "../components/emptystate";
import ClientOnly from "../components/clientonly";

import getCurrentUser from "../actions/getcurrentuser";
import getListings from "../actions/getlistings";
import PropertiesClient from "./propertiesclient";


const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState 
                    title='Unauthorized'
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const listings = await getListings({
        userId: currentUser.id
    });

    if(listings.length == 0){
        return(
            <ClientOnly>
                <EmptyState 
                    title="No properties found"
                    subtitle="Looks like you have no properties."
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}     
            />
        </ClientOnly>
    )
}

export default PropertiesPage;