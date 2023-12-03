import { ICategory } from "../../models/ICategory";
import CategoryListItem from "../CategoryListItem";
import CategoryListItemStat from "../CategoryListItemStat";
import ErrorPage from "../ErrorPage";
import { useGetCategoryQuery } from "../store/vik/vik.api";

function CategoryList() {

    const { isLoading: loadCategory, isError: errorCategory, data: categorytems } = useGetCategoryQuery('all')

    function check(id: ICategory["id"]) {
        console.log(id)
    }

    return (
        <div className="container p-6 mx-auto">
            <div className="mx-auto max-w-lg">
                <div className="mt-10">
                    <ul className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                        {errorCategory && <ErrorPage />}
                        {loadCategory && <b className="text-center text-green-600">Loading...</b>}
                        {categorytems?.map(item =>
                            <>
                                <CategoryListItem key={item.id} item={item} check={check} />
                                <CategoryListItemStat key={item.name} id={item.id} />
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryList