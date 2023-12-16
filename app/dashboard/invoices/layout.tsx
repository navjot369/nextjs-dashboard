export default function Layout({ children } : { children : React.ReactNode}) {
    return (
        <h1>HEllo <span>{children}</span></h1>
    );
}