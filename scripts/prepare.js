const common = require('./common');

async function main() {
    try {
        if (process.argv.indexOf('--help') !== -1 || process.argv.indexOf('-h') !== -1) {
            usage();
            process.exit(0);
        }

        // if (!process.env.NPM_API_TOKEN) {
        //     throw new Error('env.NPM_API_TOKEN is undefined');
        // }
        let commitMessage = '[prepare.js]';
        const mIndex = process.argv.indexOf('-m');
        if (mIndex !== -1 && process.argv.length > mIndex) {
            commitMessage += ' ' + process.argv[mIndex + 1];
            console.log(`\nCommit message: ${commitMessage}\n`);
        }

        let versionType = undefined;
        if (process.argv.indexOf('--major') !== -1) {
            versionType = 'major';
        } else if (process.argv.indexOf('--minor') !== -1) {
            versionType = 'minor';
        } else {
            versionType = 'patch';
        }
        
        await common.preparePkg(versionType, commitMessage);

        process.exit(0);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

function usage() {
    console.log('\nnode prepare.js -m "Git commit message" [--patch|--minor|--major]');
    console.log('\n\tIf no version level is specified, `--patch` will be used');
    console.log('\n\tRun this script before pushing to the Github origin.')
}

main();