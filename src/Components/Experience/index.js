import ExperienceCard from '../ExperienceCard'
import './Experience.css'

function Experience({ data }) {
    return (
        <div className="experience" id="experience">
            <div className="row">
                <h1 className="section_header">Experience</h1>
                <div className="experience__content">
                    <ExperienceCard study items={data.education} />
                    <ExperienceCard work items={data.work} />
                </div>
            </div>
        </div>
    )
}

export default Experience
