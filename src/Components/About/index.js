import Button from '../Button';
import Counter from '../Counter';
import SkillBar from '../SkillBar';
import './About.css'

function AboutNew({ data, skills, counter }) {

    return (
        <div className="aboutNew" id="about">
            <div className="row">
                <h1 className="section_header">About me</h1>
                <div className="aboutNew__content">
                    <div className="aboutNew__content_avatar">
                        <img src={"images/" + data.image} alt="Avatar Placeholder" />
                    </div>
                    <div className="aboutNew__content_details">
                        <div className="aboutNew__content_details_data">
                            <p>{data.bio}</p>
                            <Button title="Download Resume" link={data.resumedownload} />
                        </div>
                        <div className="aboutNew__content_details_skills">
                            {skills && skills.map(skill => <SkillBar key={Math.random()} skill={skill} />)}
                        </div>
                    </div>
                </div>
                <div className="aboutNew__counter">
                    {counter && counter.map(item => (
                        <Counter key={Math.random()} title={item.title} count={item.count} icon={item.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutNew
