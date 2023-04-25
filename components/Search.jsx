const Search = ({searchItem, setSearchItem}) => {
    return(
        <div className="flex justify-end my-5 gap-2 items-center">
            <label className="text-lg ">Search: </label>
            <input onChange={(e) =>setSearchItem(e.target.value)} value={searchItem} className="w-[20%] rounded-full outline-none focus:outline-none" type="text" />
        </div>
    )
}

export default Search; 