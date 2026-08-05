import ffmpeg from 'ffmpeg-static';
import { execSync } from 'child_process';

const inputFile = 'C:\\Users\\IFEDAYO LAWAL\\.gemini\\antigravity\\brain\\4e080084-28ef-429d-9fac-307782a02d4e\\registration_demo_v4.webm';
const outputFile = 'C:\\Users\\IFEDAYO LAWAL\\.gemini\\antigravity\\brain\\4e080084-28ef-429d-9fac-307782a02d4e\\registration_demo_v4.mp4';

console.log(`Converting ${inputFile} to ${outputFile}...`);
try {
  execSync(`"${ffmpeg}" -i "${inputFile}" "${outputFile}"`, { stdio: 'inherit' });
  console.log('Conversion successful!');
} catch (e) {
  console.error('Error during conversion:', e);
}
