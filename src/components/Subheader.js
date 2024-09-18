import Link from "next/link"

const Subheader = ({ title, subtitle, link }) => {
  return (
    <section id="subheader" data-speed="8" data-type="background">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{title}</h1>
                        <ul className="crumb">
                            <li><Link href="/">Home</Link></li>
                            <li className="sep">/</li>
                            {subtitle.length > 0 ? <>
                                <li><Link href={`/${link}`}>{title}</Link></li>
                                <li className="sep">/</li>
                                <li>{subtitle}</li>
                            </>: ''}
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Subheader