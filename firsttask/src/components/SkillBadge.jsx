const SkillBadge = ({ skill }) => {
    const isExpert = skill.level >= 90;

    const badgeStyle = {
        padding: '8px 15px',
        borderRadius: '20px',
        backgroundColor: isExpert ? '#ffd700' : '#e0e0e0',
        color: '#333',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    };

    return (
        <div style={badgeStyle}>
            {skill.name} {isExpert && "⭐"}
            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>({skill.level}%)</span>
        </div>
    );
};

export default SkillBadge;