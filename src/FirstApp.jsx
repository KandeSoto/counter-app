import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

  return (
    <>
        <h1>{ title }</h1>
        <p>{ subTitle }</p>    
        <p>{ name }</p>    
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string
}

FirstApp.defaultProps = {
  title: 'No hay title',
  subTitle: 'No hay subtitulos',
  name: "Kande Soto"
}