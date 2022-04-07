function solve(input) {
    let n = input.shift()
    let pattern = /(.+)>(?<password>(\d{3})(?:\|)([a-z]{3})(?:\|)([A-Z]{3})(?:\|)([^<>]{3}))<\1/gm

    for (let i = 0; i < n; i++) {
        let line = input[i]

        let match = pattern.exec(line)

        if (match !== null) {
            let cleanPass = match.groups['password']
            let finalPass = cleanPass.split('|').join('')
            console.log(`Password: ${finalPass}`);
        } else {
            console.log(`Try another password`);
        }
    }
}
solve(['3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'])
    solve(['5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111|aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*",
    "*>088|zzzz|ZzZ|123<*",
    'o>088|abc|AAA|***<o'])