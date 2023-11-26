import sytles from './Logo.module.css'

export default function logo() {
    return (
        <div className="pt-[24px] w-full h-[268px]">
            <h1 className={sytles.h1}>
                <span className='text-start'>LA</span>
                <br /> 
                <span>ESCUELA</span>
                <br />DEL
                <br />FOGÓN</h1>
        </div>
    )
}