import { useAuth } from '../../hooks';

const Footer = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? (
    <div className="w-full text-white" style={{ height: '180px' }}>
      <div className="w-full" style={{ height: '100px' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#26C6DA', display: 'block', height: '100%' }}
          />
        </svg>
        <div className="w-full" style={{ height: '80px', background: '#26C6DA' }}>
          <div className="mx-auto" style={{ width: '90%' }}>
            <h4 className="font-bold text-11 text-center">
              © Todos los derechos reservados - Zona Innfinita - 2022
            </h4>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Footer;
