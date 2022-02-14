import './pkg.module.scss';

/* eslint-disable-next-line */
export interface PkgProps {
  name: string
  title: string
  customStyles?: string
}

export function Pkg(props: PkgProps) {
  const { name, title, customStyles = '' } = props;
  return (
    <div className='pkg__container'>
      <h1 className={`pkg__title ${customStyles}`}>Welcome to {title}, {name}!</h1>
    </div>
  );
}

export default Pkg;
