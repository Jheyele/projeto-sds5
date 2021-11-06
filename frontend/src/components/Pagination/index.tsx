import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onChangePage: Function;
}

const Pagination = ({ page, onChangePage } : Props) => {
    const previous = "<<";
    const next = ">>";

    return (
        <div className="d-flex justify-content-end">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onChangePage(page.number-1)}>{previous}</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number+1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onChangePage(page.number+1)}>{next}</button>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Pagination;