function isIsomorphic(s: string, t: string): boolean {

     if (s.length !== t.length) return false;

    const mapST: Record<string, string> = {};
    const mapTS: Record<string, string> = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check s -> t mapping
        if (mapST[charS] && mapST[charS] !== charT) return false;

        // Check t -> s mapping
        if (mapTS[charT] && mapTS[charT] !== charS) return false;

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
    
};