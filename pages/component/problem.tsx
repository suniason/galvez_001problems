/* eslint-disable @next/next/no-img-element */


const Problem: React.FC = () => {
    return(
        <div className="wrapper"> 
                <div className="problemwrapper">
                    <div className="head">
                        <h1 className="problemhead">PROBLEM</h1>
                    </div>
                    <div className="content">
                        In the present times, people have been fighting against fake new, misinformation and disinformation.
                        However, the threat seemed to become worse. According to a statistical data from Statista.com, 
                        approximately 50% of consumers from each region witnesses false information about COVID-19. 
                        <div>
                        <img src="statistics.png" 
                        alt="Consumers witnessing false information on certain topics worldwide 2022 by region" />
                        </div>
                        That is very dangerous because in times of crisis, this information could mislead people to doing 
                        harmful actions. Things like the anti-vax movement where people instead take on the risky route of 
                        not getting vaccinated because of a random post on social media that vaccination is more dangerous 
                        than the virus itself. It is insane how people are able to distrust science because of a post 
                        that is targeted to strike fear against a very good cause.
                    </div>
                </div>
        </div>
    )
}

export default Problem