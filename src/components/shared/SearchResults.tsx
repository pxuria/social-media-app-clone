import { Models } from "appwrite";
import { Loader } from ".";
import GridPostList from "./GridPostList";

type searchedResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: searchedResultProps) => {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts?.documents.length > 0) {
    return (
      <div className="">
        <GridPostList posts={searchedPosts.documents} />
      </div>
    );
  }

  return (
    <p className="mt-10 text-center text-light-4 w-full">No Posts Found.</p>
  );
};

export default SearchResults;
