import getCurrentUser from "../actions/getcurrentuser";
import getFavoriteListings from "../actions/getfavoritelistings"
import ClientOnly from "../components/clientonly"
import EmptyState from "../components/emptystate"
import FavoritesClient from "./favoritesclient";

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if(listings.length == 0){
        return (
            <ClientOnly>
                <EmptyState
                    title="No favorites found"
                    subtitle="Looks like you have no favorite listings."
                />
            </ClientOnly>
        )
    }
    return(
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage;