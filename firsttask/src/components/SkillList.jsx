import SkillBadge from './SkillBadge';

const SkillList = ({ skills }) => {
    return (
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            {skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
            ))}
        </div>
    );
};

export default SkillList;