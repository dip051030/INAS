import fs from 'fs';

const siteData = fs.readFileSync('data/siteData.ts', 'utf8');
const teamMatch = siteData.match(/export const UK_EXECUTIVE_COMMITTEE: UKTeamMember\[\] = (\[[\s\S]*?\]);/);
if (teamMatch) {
  const team = JSON.parse(teamMatch[1]);
  console.log(`Total members: ${team.length}`);
  const stateMembers = team.filter(m => m.category === 'State Coordinators' || m.category === 'Past State Coordinators');
  console.log('State Committee members:');
  console.log(JSON.stringify(stateMembers, null, 2));
}
