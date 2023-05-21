import getCurrentUser from "@/app/actions/getcurrentuser";
import getListingById from "@/app/actions/getlistingbyid";
import getReservations from "@/app/actions/getreservations";
import ClientOnly from "@/app/components/clientonly";
import EmptyState from "@/app/components/emptystate";
import ListingClient from "./listingclient";

interface IParams{
    listingId?: string
}

const ListingPage = async ({params} : {params:IParams}) => {
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if(!listing){
        return (
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }
    return ( 
        <ClientOnly>
            <ListingClient
                listing={listing}
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
     );
}
 
export default ListingPage;