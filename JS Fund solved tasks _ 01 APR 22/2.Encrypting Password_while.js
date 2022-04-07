function solve(input) {
    let num = input.shift()
    let pattern = /(.+)>(?<num>\d{3})(?:\|)(?<lower>[a-z]{3})(?:\|)(?<upper>[A-Z]{3})(?:\|)(?<symbol>[^<>]{3})<\1/gm

    while (num > 0) {
        let line = input.shift()
        let match = pattern.exec(line)

        if (match !== null) {
            console.log(`Password: ${match.groups['num']}${match.groups['lower']}${match.groups['upper']}${match.groups['symbol']}`);
        } else {
            console.log(`Try another password`);
        }

        num--
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