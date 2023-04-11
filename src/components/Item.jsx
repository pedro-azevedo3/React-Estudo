import PropTypes from 'prop-types'

function Item({marca, serie}) {
    return (
        <>
            <li>{marca} - {serie}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    serie: 'Faltou a série',
}

export default Item