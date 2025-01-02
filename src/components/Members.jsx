import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const teamMembers = [
  {
    name: 'Daniel Jack',
    role: 'Creative Director',
    description: 'Daniel Jack oversees all creative projects, bringing his keen eye for design and exceptional storytelling abilities to the table.',
  },
  {
    name: 'Bob Pasley',
    role: 'Lead Designer',
    description: 'Bob Pabsley is the creative force behind our stunning visual designs with a strong background in UI/UX and graphic design.',
  },
  {
    name: 'Andrew Onana',
    role: 'Senior Developer',
    description: 'Andrew Onana is our tech guru, responsible for turning our creative visions into functional digital solutions.',
  },
  {
    name: 'Luka Modric',
    role: 'Project Manager',
    description: 'James ensures that all our projects are delivered on time and within budget, every project runs smoothly from start to finish.',
  },
  {
    name: 'Toni Kross',
    role: 'Lead Visual',
    description: 'Toni Kroos brings a fresh perspective to our design team. He helps our clients stand out in a crowded market.',
  },
];

const MemberCard = ({ name, role, description }) => (
  <motion.div
    className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="text-sm italic text-gray-400">{role}</p>
    <p className="mt-4">{description}</p>
  </motion.div>
);

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Members = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold mb-12">Our Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Members;
