import EmptyState from "../components/emptystate";
import ClientOnly from "../components/clientonly";

import getCurrentUser from "../actions/getcurrentuser";
import getReservations from "../actions/getreservations";
import TripsClient from "./tripsclient";


const TripsPage = async () => {
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

    const reservations = await getReservations({
        userId: currentUser.id
    });

    if(reservations.length == 0){
        return(
            <ClientOnly>
                <EmptyState 
                    title="No trips found"
                    subtitle="Looks like you haven't reserverd any trips."
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}     
            />
        </ClientOnly>
    )
}

export default TripsPage;