import Header from './Components/Header';
import ThemeRegistry from './Theme';
import './globals.css';
export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      <body style={{ textTransform: 'capitalize' }}>
        <ThemeRegistry>
          <Header />
          <main style={{ marginTop: '5rem' }}>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
