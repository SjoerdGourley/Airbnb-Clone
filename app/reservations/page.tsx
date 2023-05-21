import EmptyState from "../components/emptystate";
import ClientOnly from "../components/clientonly";

import getCurrentUser from "../actions/getcurrentuser";
import getReservations from "../actions/getreservations";
import ReservationsClient from "./reservationsclient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState
                    title='Unauthorized'
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }


    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if(reservations.length == 0) {
        return(
            <ClientOnly>
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you have no reservations on your property."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
};

export default ReservationsPage