import Header from './Header';

const Layout = (props) => {
    const { children } = props

    return (
      <div>
        <Header />
        {children}
        <footer>
          <p>The nft's displayed on this site is not mine to sell, this is an educational webpage.</p>
        </footer>
      </div>
    )
  
}

export default Layout;