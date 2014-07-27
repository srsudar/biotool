/* global describe, it, assert */

(function() {
    'use strict';

    var allValidBases = 'atcgATCGuU';
    // A sequence with a single invalid base: f.
    var sequenceWithInvalidBase = 'atcfccgg';

    var oct4 =
    'GAGGTGAAACCGTCCCTAGGTGAGCCGTCTTTCCACCAGGCCCCCGGCTCGGGGTGCCCACCTTCCCCAT' +
    'GGCTGGACACCTGGCTTCAGACTTCGCCTTCTCACCCCCACCAGGTGGGGGTGATGGGTCAGCAGGGCTG' +
    'GAGCCGGGCTGGGTGGATCCTCGAACCTGGCTAAGCTTCCAAGGGCCTCCAGGTGGGCCTGGAATCGGAC' +
    'CAGGCTCAGAGGTATTGGGGATCTCCCCATGTCCGCCCGCATACGAGTTCTGCGGAGGGATGGCATACTG' +
    'TGGACCTCAGGTTGGACTGGGCCTAGTCCCCCAAGTTGGCGTGGAGACTTTGCAGCCTGAGGGCCAGGCA' +
    'GGAGCACGAGTGGAAAGCAACTCAGAGGGAACCTCCTCTGAGCCCTGTGCCGACCGCCCCAATGCCGTGA' +
    'AGTTGGAGAAGGTGGAACCAACTCCCGAGGAGGTAAGTGAAGGGACTTGGCTGGGCTGGCAGAGGCAGCA' +
    'GTGAAGGGAATTGGGAACATGTAGGGTAGCCACCCTGCCTGCCAAAGGTGGTGATGGCTGCCGGGCCTCC' +
    'TGAGAAGCACGACGCAGTGTGGACTAGAACCCAGAATTGCAAGAATCAGAAACCGGCCTGGATTGTTTCG' +
    'GCCTGGCCCTTGTCATGTAGGTCACCTAGGCCTGGCCTGTGTCCCGACACTTGCTTCATGCCATCACTGT' +
    'CTGTACACCAGTGATGCGTGAAAATCAGCCCCCCCCCAAAAAAAAAAACATATCAGCCCCTCTGGGGACT' +
    'TGGATCACAGTCGGACCCAGGAACTTGGCCTTAAGGTTAGGCATGGCTGGGGGGGTAAAAAATGGTGCTT' +
    'ATCCTGGAGTTATTGTTACTGAAGAGGTTGGGTGTGACTGGCTGCTGATAGGAGCTCTTGTTTGGGCCAT' +
    'GTGTGGAGTAGGGCTCACCTTCAGTCAAGTTTACGGCCTGTCTACTTTAGCCTCAGACTCCATGAGTCAC' +
    'CTTTACACGAGCAGACCCTTGTAGTGCCTGAGGTGCAGATCTGATCGATTTCAGCCTTTCTACCTTTCCT' +
    'TGTAAACAAGAAAGGGACACCCTTGGGTAGGGGAGTTTTATCTCCAGGCCATCTTAAGATCATTCTGTGA' +
    'GTGCACGGGCCTTGCTTAGTGTCTGATGGCCTACAGCCAGCACTCTGGAGCAAGTGTAAGCAATTAGCCT' +
    'TAAGAACAAGGTGCGAGTGGATACCGATGCCCGCCGGGAGTTCCGACAGCTTAGCGATTGTTGTAGCAGG' +
    'AGTCCCCTCCCTAAGTGCCAGTTTCTGTGTTATCTCAGGTCCTGTATGCCGCCGGGAGTCCCCTAGGAAG' +
    'GCATTAATAGTTTATCTCACATCTTAAATGGCCCTTAATGAAGCAAGAGATTTGAACCTTAGTTAAGCTA' +
    'ATCCCAAATCCTCAAAATAGGATTTAGAAAAGCCAAAGACACTGCTGAGGGCGATTACAAGTTTTGGTCT' +
    'TTTGAGGAGCAGTTGGAGATGAAAGTCTGTCTGAAGCCGAGAGAATCCTTTTCCATTGAAATGGCATTGA' +
    'GGTGTGCCTCACTGGCTGCTGCTTCTGTCTGTGCCCTGGGTTGGCCAGCCTTTGTGGAGCACCTCAGCCC' +
    'TCCATCCTGGACCTTTGCTCCAACAACCTGCTCCTCTTCCGCCCTCAAGGCTGACTTGCATCTCCCCAGA' +
    'TGACTGCCTCCATTTCTGTCTTCTGTTAGAGACAGAAAAGCCTGAGAAACCGACAGCCATTTTGGGGGGG' +
    'GGGGGTCCGGTTCACACGCTGCAACTTAGAAAGCACACTCAACTGGCCATCTGTTATACCCTCCCCACCT' +
    'GGTCCCAACCATCACTGTGTACTACTGAGAAGAAGGCAGCCTTAGCCACACCCTCGAGTGCCCCTGCCGT' +
    'TCTATTGCTCATACATCGATTGATATCCCTGTTTCAACTTTGAAAAAAAAAAATTTTTTTTTTTTTGTGG' +
    'TGTGTGCATGCCTGCTACTGTACACCTGTGGGCGTCAGAGGTGGTCCTCTGCACCCTCCGGCCAGTACCG' +
    'CATCCAGGGTGAGTCAGATGATTTCCTGTGGTTTGGGCCTCAAGGCTTCTCACCTCCAGAGGCTTCTAGC' +
    'CTGCTGCCTTGCTTTCTCTGTCGCACTCTAGTACAGCAGGAGTTTTCTTCGCACTCCGGAGTGTTGTCAG' +
    'CTCCTGGGGCATGGACATTTGGCTACTTAGAGTGTGCTGTGTAGGTTTTCATTTAGAGCTGAACAGAGGG' +
    'ATGGATCTTATTACCCCAGCCCTTGAGACACTGAGGCAGGAGAGCTTCCTAGTGAGTCCCTGTTTCAATA' +
    'TCTTCACTAATACTGTGTCATACTTTGGGACTTTCTTTCTTCCTTTCTTTCTTTTGATTTTTTTTTTTTT' +
    'TATATGAGTACAGTGTACCTGTCTTCAGACACACACCAGAAGAGGGCATCAGATCCTACTACAGAAGGTT' +
    'GTGAGCCACCTTGTGGTTGCTGGGAATTGAACTCCGGATCTCCGGAAGAGAAGTCCGTATACCAACTTCT' +
    'GTATTAGTCAGGGTTCTCTAGAGTCACAGAACTTATGGACAGTCTCTAGATAGTAAAGGAATTTATTGAT' +
    'GACTTACAGTCGGCAGCCCAATTCCCAACAATGGTTCAGTCGCAGCTGTGAATGGAAGTCCAAGGATCTA' +
    'GCAGTTACTTAGTCTCACGCAGCAAGCAGGCGAAGGAGCAAGAGCTAGAGCTTAACTGCTGAGCCATGTG' +
    'TTTCTTGAGTAAAGGGATTACATGCTCGTTCGTCTGGTCAATTCTGCAGCCTTAAAACTTCTTCAGAATA' +
    'GGGTGACATTTTGTCCTCAGTGGGGCGGTTTTGAGTAATCTGTGAGCAGATAGGAACTTGCTGGGGTACT' +
    'GCACAGAACTCTGGGTAGTGTGGTACTGTAGATGGCTAGGTTCTGGGGGGGGAAAGAGCCATCTATGTCA' +
    'CCTAGGAATAGAGTGAATAACATTTATATAATCAGACCAGCCCTTGAGGAGGCTGAGATCTTTTCATGGG' +
    'GCACCCTAGGGTCACAGTCCCAGCTGGTGTGACTCTGACAAGTCTGCCTTTCTCACTACAGTCCCAGGAC' +
    'ATGAAAGCCCTGCAGAAGGAGCTAGAACAGTTTGCCAAGCTGCTGAAGCAGAAGAGGATCACCTTGGGGT' +
    'ACACCCAGGCCGACGTGGGGCTCACCCTGGGCGTTCTCTTTGGTGGGTCTCCCCCAGCATGTTCTGATCT' +
    'CACGGCTCTTAATGTAGGCGCAAGGGGGTGGGGCATCTTAGGAGCTGCTTCTCCACAGGTAAGGGAGGAT' +
    'TAGACGCTTGTAGCTTGAACTGTCAGAGGTGGGGGCTTGGGCTCCCTTCTTGCTGCCTCACTCACTCTGT' +
    'TTGATCGGCCTTTCAGGAAAGGTGTTCAGCCAGACCACCATCTGTCGCTTCGAGGCCTTGCAGCTCAGCC' +
    'TTAAGAACATGTGTAAGCTGCGGCCCCTGCTGGAGAAGTGGGTGGAGGAAGCCGACAACAATGAGAACCT' +
    'TCAGGAGGTGAGGAGTGGCAGGATGTGTGCAATGTCTGCCAGGCACAGTCCCTTCTGCTGCTTCCATTCC' +
    'TGGCTTGAAACTCCTCCCTCTCCAACCGGAGCTCGCAGGAGAAGTTCTGTGTCCTTATTCTGCTGCTATG' +
    'AATTGGAATCCAGAGCCTTAACATTTGCTAATCAATCAGGCTCTCTCCTTCTGAGTCACCCTCTGCCCCC' +
    'ACCAGCCTGACAATGGTCCCTCCCCAGAACCCCGTCTAGTGCTGGTGAAGGCTCAGACCTAGGTCTACCA' +
    'GCCCCTTCCAGAGCCCCTTTCAGTAACCCCTGGCTCTGGGGCCACATCCAGTCAATGCTCCCTTAGCACA' +
    'ATCCCTTAGCGGTTTGTTCTTCAGTCCCATCTCAAGGTGGGGCTGTTGCCAAGTCAAATACTAAAGTTGC' +
    'TCTTGTCGCCCCCATCTTCCCCTGCCCAGATATGCAAATCGGAGACCCTGGTGCAGGCCCGGAAGAGAAA' +
    'GCGAACTAGCATTGAGAACCGTGTGAGGTGGAGTCTGGAGACCATGTTTCTGAAGTGCCCGAAGCCCTCC' +
    'CTACAGCAGATCACTCACATCGCCAATCAGCTTGGGCTAGAGAAGGATGTGAGTGCCAAGATCCTGCCCT' +
    'GTGGTACCTGGATGTTTCCCTGTTCCCATTCCCCACCCCCCCCACCCCCCCACCCCCACCGCCGCCACCG' +
    'CTGACTGCAGCATCCCAGAGCTTATGATCTGATGTCCATCTCTGTGCCCATCCTAGGTGGTTCGAGTATG' +
    'GTTCTGTAACCGGCGCCAGAAGGGCAAAAGATCAAGTATTGAGTATTCCCAACGAGAAGAGTATGAGGCT' +
    'ACAGGGACACCTTTCCCAGGGGGGGCTGTATCCTTTCCTCTGCCCCCAGGTCCCCACTTTGGCACCCCAG' +
    'GCTATGGAAGCCCCCACTTCACCACACTCTACTCAGTCCCTTTTCCTGAGGGCGAGGCCTTTCCCTCTGT' +
    'TCCCGTCACTGCTCTGGGCTCTCCCATGCATTCAAACTGAGGCACCAGCCCTCCCTGGGGATGCTGTGAG' +
    'CCAAGGCAAGGGAGGTAGACAAGAGAACCTGGAGCTTTGGGGTTAAATTCTTTTACTGAGGAGGGATTAA' +
    'AAGCACAACAGGGGTGGGGGGTGGGATGGGGAAAGAAGCTCAGTGATGCTGTTGATCAGGAGCCTGGCCT' +
    'GTCTGTCACTCATCATTTTGTTCTTAAATAAAGACTGGGACACACAGTAGATAGCT';

    var oct4Complement =
    'CTCCACTTTGGCAGGGATCCACTCGGCAGAAAGGTGGTCCGGGGGCCGAGCCCCACGGGTGGAAGGGGTA' +
    'CCGACCTGTGGACCGAAGTCTGAAGCGGAAGAGTGGGGGTGGTCCACCCCCACTACCCAGTCGTCCCGAC' +
    'CTCGGCCCGACCCACCTAGGAGCTTGGACCGATTCGAAGGTTCCCGGAGGTCCACCCGGACCTTAGCCTG' +
    'GTCCGAGTCTCCATAACCCCTAGAGGGGTACAGGCGGGCGTATGCTCAAGACGCCTCCCTACCGTATGAC' +
    'ACCTGGAGTCCAACCTGACCCGGATCAGGGGGTTCAACCGCACCTCTGAAACGTCGGACTCCCGGTCCGT' +
    'CCTCGTGCTCACCTTTCGTTGAGTCTCCCTTGGAGGAGACTCGGGACACGGCTGGCGGGGTTACGGCACT' +
    'TCAACCTCTTCCACCTTGGTTGAGGGCTCCTCCATTCACTTCCCTGAACCGACCCGACCGTCTCCGTCGT' +
    'CACTTCCCTTAACCCTTGTACATCCCATCGGTGGGACGGACGGTTTCCACCACTACCGACGGCCCGGAGG' +
    'ACTCTTCGTGCTGCGTCACACCTGATCTTGGGTCTTAACGTTCTTAGTCTTTGGCCGGACCTAACAAAGC' +
    'CGGACCGGGAACAGTACATCCAGTGGATCCGGACCGGACACAGGGCTGTGAACGAAGTACGGTAGTGACA' +
    'GACATGTGGTCACTACGCACTTTTAGTCGGGGGGGGGTTTTTTTTTTTGTATAGTCGGGGAGACCCCTGA' +
    'ACCTAGTGTCAGCCTGGGTCCTTGAACCGGAATTCCAATCCGTACCGACCCCCCCATTTTTTACCACGAA' +
    'TAGGACCTCAATAACAATGACTTCTCCAACCCACACTGACCGACGACTATCCTCGAGAACAAACCCGGTA' +
    'CACACCTCATCCCGAGTGGAAGTCAGTTCAAATGCCGGACAGATGAAATCGGAGTCTGAGGTACTCAGTG' +
    'GAAATGTGCTCGTCTGGGAACATCACGGACTCCACGTCTAGACTAGCTAAAGTCGGAAAGATGGAAAGGA' +
    'ACATTTGTTCTTTCCCTGTGGGAACCCATCCCCTCAAAATAGAGGTCCGGTAGAATTCTAGTAAGACACT' +
    'CACGTGCCCGGAACGAATCACAGACTACCGGATGTCGGTCGTGAGACCTCGTTCACATTCGTTAATCGGA' +
    'ATTCTTGTTCCACGCTCACCTATGGCTACGGGCGGCCCTCAAGGCTGTCGAATCGCTAACAACATCGTCC' +
    'TCAGGGGAGGGATTCACGGTCAAAGACACAATAGAGTCCAGGACATACGGCGGCCCTCAGGGGATCCTTC' +
    'CGTAATTATCAAATAGAGTGTAGAATTTACCGGGAATTACTTCGTTCTCTAAACTTGGAATCAATTCGAT' +
    'TAGGGTTTAGGAGTTTTATCCTAAATCTTTTCGGTTTCTGTGACGACTCCCGCTAATGTTCAAAACCAGA' +
    'AAACTCCTCGTCAACCTCTACTTTCAGACAGACTTCGGCTCTCTTAGGAAAAGGTAACTTTACCGTAACT' +
    'CCACACGGAGTGACCGACGACGAAGACAGACACGGGACCCAACCGGTCGGAAACACCTCGTGGAGTCGGG' +
    'AGGTAGGACCTGGAAACGAGGTTGTTGGACGAGGAGAAGGCGGGAGTTCCGACTGAACGTAGAGGGGTCT' +
    'ACTGACGGAGGTAAAGACAGAAGACAATCTCTGTCTTTTCGGACTCTTTGGCTGTCGGTAAAACCCCCCC' +
    'CCCCCAGGCCAAGTGTGCGACGTTGAATCTTTCGTGTGAGTTGACCGGTAGACAATATGGGAGGGGTGGA' +
    'CCAGGGTTGGTAGTGACACATGATGACTCTTCTTCCGTCGGAATCGGTGTGGGAGCTCACGGGGACGGCA' +
    'AGATAACGAGTATGTAGCTAACTATAGGGACAAAGTTGAAACTTTTTTTTTTTAAAAAAAAAAAAACACC' +
    'ACACACGTACGGACGATGACATGTGGACACCCGCAGTCTCCACCAGGAGACGTGGGAGGCCGGTCATGGC' +
    'GTAGGTCCCACTCAGTCTACTAAAGGACACCAAACCCGGAGTTCCGAAGAGTGGAGGTCTCCGAAGATCG' +
    'GACGACGGAACGAAAGAGACAGCGTGAGATCATGTCGTCCTCAAAAGAAGCGTGAGGCCTCACAACAGTC' +
    'GAGGACCCCGTACCTGTAAACCGATGAATCTCACACGACACATCCAAAAGTAAATCTCGACTTGTCTCCC' +
    'TACCTAGAATAATGGGGTCGGGAACTCTGTGACTCCGTCCTCTCGAAGGATCACTCAGGGACAAAGTTAT' +
    'AGAAGTGATTATGACACAGTATGAAACCCTGAAAGAAAGAAGGAAAGAAAGAAAACTAAAAAAAAAAAAA' +
    'ATATACTCATGTCACATGGACAGAAGTCTGTGTGTGGTCTTCTCCCGTAGTCTAGGATGATGTCTTCCAA' +
    'CACTCGGTGGAACACCAACGACCCTTAACTTGAGGCCTAGAGGCCTTCTCTTCAGGCATATGGTTGAAGA' +
    'CATAATCAGTCCCAAGAGATCTCAGTGTCTTGAATACCTGTCAGAGATCTATCATTTCCTTAAATAACTA' +
    'CTGAATGTCAGCCGTCGGGTTAAGGGTTGTTACCAAGTCAGCGTCGACACTTACCTTCAGGTTCCTAGAT' +
    'CGTCAATGAATCAGAGTGCGTCGTTCGTCCGCTTCCTCGTTCTCGATCTCGAATTGACGACTCGGTACAC' +
    'AAAGAACTCATTTCCCTAATGTACGAGCAAGCAGACCAGTTAAGACGTCGGAATTTTGAAGAAGTCTTAT' +
    'CCCACTGTAAAACAGGAGTCACCCCGCCAAAACTCATTAGACACTCGTCTATCCTTGAACGACCCCATGA' +
    'CGTGTCTTGAGACCCATCACACCATGACATCTACCGATCCAAGACCCCCCCCTTTCTCGGTAGATACAGT' +
    'GGATCCTTATCTCACTTATTGTAAATATATTAGTCTGGTCGGGAACTCCTCCGACTCTAGAAAAGTACCC' +
    'CGTGGGATCCCAGTGTCAGGGTCGACCACACTGAGACTGTTCAGACGGAAAGAGTGATGTCAGGGTCCTG' +
    'TACTTTCGGGACGTCTTCCTCGATCTTGTCAAACGGTTCGACGACTTCGTCTTCTCCTAGTGGAACCCCA' +
    'TGTGGGTCCGGCTGCACCCCGAGTGGGACCCGCAAGAGAAACCACCCAGAGGGGGTCGTACAAGACTAGA' +
    'GTGCCGAGAATTACATCCGCGTTCCCCCACCCCGTAGAATCCTCGACGAAGAGGTGTCCATTCCCTCCTA' +
    'ATCTGCGAACATCGAACTTGACAGTCTCCACCCCCGAACCCGAGGGAAGAACGACGGAGTGAGTGAGACA' +
    'AACTAGCCGGAAAGTCCTTTCCACAAGTCGGTCTGGTGGTAGACAGCGAAGCTCCGGAACGTCGAGTCGG' +
    'AATTCTTGTACACATTCGACGCCGGGGACGACCTCTTCACCCACCTCCTTCGGCTGTTGTTACTCTTGGA' +
    'AGTCCTCCACTCCTCACCGTCCTACACACGTTACAGACGGTCCGTGTCAGGGAAGACGACGAAGGTAAGG' +
    'ACCGAACTTTGAGGAGGGAGAGGTTGGCCTCGAGCGTCCTCTTCAAGACACAGGAATAAGACGACGATAC' +
    'TTAACCTTAGGTCTCGGAATTGTAAACGATTAGTTAGTCCGAGAGAGGAAGACTCAGTGGGAGACGGGGG' +
    'TGGTCGGACTGTTACCAGGGAGGGGTCTTGGGGCAGATCACGACCACTTCCGAGTCTGGATCCAGATGGT' +
    'CGGGGAAGGTCTCGGGGAAAGTCATTGGGGACCGAGACCCCGGTGTAGGTCAGTTACGAGGGAATCGTGT' +
    'TAGGGAATCGCCAAACAAGAAGTCAGGGTAGAGTTCCACCCCGACAACGGTTCAGTTTATGATTTCAACG' +
    'AGAACAGCGGGGGTAGAAGGGGACGGGTCTATACGTTTAGCCTCTGGGACCACGTCCGGGCCTTCTCTTT' +
    'CGCTTGATCGTAACTCTTGGCACACTCCACCTCAGACCTCTGGTACAAAGACTTCACGGGCTTCGGGAGG' +
    'GATGTCGTCTAGTGAGTGTAGCGGTTAGTCGAACCCGATCTCTTCCTACACTCACGGTTCTAGGACGGGA' +
    'CACCATGGACCTACAAAGGGACAAGGGTAAGGGGTGGGGGGGGTGGGGGGGTGGGGGTGGCGGCGGTGGC' +
    'GACTGACGTCGTAGGGTCTCGAATACTAGACTACAGGTAGAGACACGGGTAGGATCCACCAAGCTCATAC' +
    'CAAGACATTGGCCGCGGTCTTCCCGTTTTCTAGTTCATAACTCATAAGGGTTGCTCTTCTCATACTCCGA' +
    'TGTCCCTGTGGAAAGGGTCCCCCCCGACATAGGAAAGGAGACGGGGGTCCAGGGGTGAAACCGTGGGGTC' +
    'CGATACCTTCGGGGGTGAAGTGGTGTGAGATGAGTCAGGGAAAAGGACTCCCGCTCCGGAAAGGGAGACA' +
    'AGGGCAGTGACGAGACCCGAGAGGGTACGTAAGTTTGACTCCGTGGTCGGGAGGGACCCCTACGACACTC' +
    'GGTTCCGTTCCCTCCATCTGTTCTCTTGGACCTCGAAACCCCAATTTAAGAAAATGACTCCTCCCTAATT' +
    'TTCGTGTTGTCCCCACCCCCCACCCTACCCCTTTCTTCGAGTCACTACGACAACTAGTCCTCGGACCGGA' +
    'CAGACAGTGAGTAGTAAAACAAGAATTTATTTCTGACCCTGTGTGTCATCTATCGA';

    var oct4ReverseComplement =
    'AGCTATCTACTGTGTGTCCCAGTCTTTATTTAAGAACAAAATGATGAGTGACAGACAGGCCAGGCTCCTG' +
    'ATCAACAGCATCACTGAGCTTCTTTCCCCATCCCACCCCCCACCCCTGTTGTGCTTTTAATCCCTCCTCA' +
    'GTAAAAGAATTTAACCCCAAAGCTCCAGGTTCTCTTGTCTACCTCCCTTGCCTTGGCTCACAGCATCCCC' +
    'AGGGAGGGCTGGTGCCTCAGTTTGAATGCATGGGAGAGCCCAGAGCAGTGACGGGAACAGAGGGAAAGGC' +
    'CTCGCCCTCAGGAAAAGGGACTGAGTAGAGTGTGGTGAAGTGGGGGCTTCCATAGCCTGGGGTGCCAAAG' +
    'TGGGGACCTGGGGGCAGAGGAAAGGATACAGCCCCCCCTGGGAAAGGTGTCCCTGTAGCCTCATACTCTT' +
    'CTCGTTGGGAATACTCAATACTTGATCTTTTGCCCTTCTGGCGCCGGTTACAGAACCATACTCGAACCAC' +
    'CTAGGATGGGCACAGAGATGGACATCAGATCATAAGCTCTGGGATGCTGCAGTCAGCGGTGGCGGCGGTG' +
    'GGGGTGGGGGGGTGGGGGGGGTGGGGAATGGGAACAGGGAAACATCCAGGTACCACAGGGCAGGATCTTG' +
    'GCACTCACATCCTTCTCTAGCCCAAGCTGATTGGCGATGTGAGTGATCTGCTGTAGGGAGGGCTTCGGGC' +
    'ACTTCAGAAACATGGTCTCCAGACTCCACCTCACACGGTTCTCAATGCTAGTTCGCTTTCTCTTCCGGGC' +
    'CTGCACCAGGGTCTCCGATTTGCATATCTGGGCAGGGGAAGATGGGGGCGACAAGAGCAACTTTAGTATT' +
    'TGACTTGGCAACAGCCCCACCTTGAGATGGGACTGAAGAACAAACCGCTAAGGGATTGTGCTAAGGGAGC' +
    'ATTGACTGGATGTGGCCCCAGAGCCAGGGGTTACTGAAAGGGGCTCTGGAAGGGGCTGGTAGACCTAGGT' +
    'CTGAGCCTTCACCAGCACTAGACGGGGTTCTGGGGAGGGACCATTGTCAGGCTGGTGGGGGCAGAGGGTG' +
    'ACTCAGAAGGAGAGAGCCTGATTGATTAGCAAATGTTAAGGCTCTGGATTCCAATTCATAGCAGCAGAAT' +
    'AAGGACACAGAACTTCTCCTGCGAGCTCCGGTTGGAGAGGGAGGAGTTTCAAGCCAGGAATGGAAGCAGC' +
    'AGAAGGGACTGTGCCTGGCAGACATTGCACACATCCTGCCACTCCTCACCTCCTGAAGGTTCTCATTGTT' +
    'GTCGGCTTCCTCCACCCACTTCTCCAGCAGGGGCCGCAGCTTACACATGTTCTTAAGGCTGAGCTGCAAG' +
    'GCCTCGAAGCGACAGATGGTGGTCTGGCTGAACACCTTTCCTGAAAGGCCGATCAAACAGAGTGAGTGAG' +
    'GCAGCAAGAAGGGAGCCCAAGCCCCCACCTCTGACAGTTCAAGCTACAAGCGTCTAATCCTCCCTTACCT' +
    'GTGGAGAAGCAGCTCCTAAGATGCCCCACCCCCTTGCGCCTACATTAAGAGCCGTGAGATCAGAACATGC' +
    'TGGGGGAGACCCACCAAAGAGAACGCCCAGGGTGAGCCCCACGTCGGCCTGGGTGTACCCCAAGGTGATC' +
    'CTCTTCTGCTTCAGCAGCTTGGCAAACTGTTCTAGCTCCTTCTGCAGGGCTTTCATGTCCTGGGACTGTA' +
    'GTGAGAAAGGCAGACTTGTCAGAGTCACACCAGCTGGGACTGTGACCCTAGGGTGCCCCATGAAAAGATC' +
    'TCAGCCTCCTCAAGGGCTGGTCTGATTATATAAATGTTATTCACTCTATTCCTAGGTGACATAGATGGCT' +
    'CTTTCCCCCCCCAGAACCTAGCCATCTACAGTACCACACTACCCAGAGTTCTGTGCAGTACCCCAGCAAG' +
    'TTCCTATCTGCTCACAGATTACTCAAAACCGCCCCACTGAGGACAAAATGTCACCCTATTCTGAAGAAGT' +
    'TTTAAGGCTGCAGAATTGACCAGACGAACGAGCATGTAATCCCTTTACTCAAGAAACACATGGCTCAGCA' +
    'GTTAAGCTCTAGCTCTTGCTCCTTCGCCTGCTTGCTGCGTGAGACTAAGTAACTGCTAGATCCTTGGACT' +
    'TCCATTCACAGCTGCGACTGAACCATTGTTGGGAATTGGGCTGCCGACTGTAAGTCATCAATAAATTCCT' +
    'TTACTATCTAGAGACTGTCCATAAGTTCTGTGACTCTAGAGAACCCTGACTAATACAGAAGTTGGTATAC' +
    'GGACTTCTCTTCCGGAGATCCGGAGTTCAATTCCCAGCAACCACAAGGTGGCTCACAACCTTCTGTAGTA' +
    'GGATCTGATGCCCTCTTCTGGTGTGTGTCTGAAGACAGGTACACTGTACTCATATAAAAAAAAAAAAAAT' +
    'CAAAAGAAAGAAAGGAAGAAAGAAAGTCCCAAAGTATGACACAGTATTAGTGAAGATATTGAAACAGGGA' +
    'CTCACTAGGAAGCTCTCCTGCCTCAGTGTCTCAAGGGCTGGGGTAATAAGATCCATCCCTCTGTTCAGCT' +
    'CTAAATGAAAACCTACACAGCACACTCTAAGTAGCCAAATGTCCATGCCCCAGGAGCTGACAACACTCCG' +
    'GAGTGCGAAGAAAACTCCTGCTGTACTAGAGTGCGACAGAGAAAGCAAGGCAGCAGGCTAGAAGCCTCTG' +
    'GAGGTGAGAAGCCTTGAGGCCCAAACCACAGGAAATCATCTGACTCACCCTGGATGCGGTACTGGCCGGA' +
    'GGGTGCAGAGGACCACCTCTGACGCCCACAGGTGTACAGTAGCAGGCATGCACACACCACAAAAAAAAAA' +
    'AAATTTTTTTTTTTCAAAGTTGAAACAGGGATATCAATCGATGTATGAGCAATAGAACGGCAGGGGCACT' +
    'CGAGGGTGTGGCTAAGGCTGCCTTCTTCTCAGTAGTACACAGTGATGGTTGGGACCAGGTGGGGAGGGTA' +
    'TAACAGATGGCCAGTTGAGTGTGCTTTCTAAGTTGCAGCGTGTGAACCGGACCCCCCCCCCCCAAAATGG' +
    'CTGTCGGTTTCTCAGGCTTTTCTGTCTCTAACAGAAGACAGAAATGGAGGCAGTCATCTGGGGAGATGCA' +
    'AGTCAGCCTTGAGGGCGGAAGAGGAGCAGGTTGTTGGAGCAAAGGTCCAGGATGGAGGGCTGAGGTGCTC' +
    'CACAAAGGCTGGCCAACCCAGGGCACAGACAGAAGCAGCAGCCAGTGAGGCACACCTCAATGCCATTTCA' +
    'ATGGAAAAGGATTCTCTCGGCTTCAGACAGACTTTCATCTCCAACTGCTCCTCAAAAGACCAAAACTTGT' +
    'AATCGCCCTCAGCAGTGTCTTTGGCTTTTCTAAATCCTATTTTGAGGATTTGGGATTAGCTTAACTAAGG' +
    'TTCAAATCTCTTGCTTCATTAAGGGCCATTTAAGATGTGAGATAAACTATTAATGCCTTCCTAGGGGACT' +
    'CCCGGCGGCATACAGGACCTGAGATAACACAGAAACTGGCACTTAGGGAGGGGACTCCTGCTACAACAAT' +
    'CGCTAAGCTGTCGGAACTCCCGGCGGGCATCGGTATCCACTCGCACCTTGTTCTTAAGGCTAATTGCTTA' +
    'CACTTGCTCCAGAGTGCTGGCTGTAGGCCATCAGACACTAAGCAAGGCCCGTGCACTCACAGAATGATCT' +
    'TAAGATGGCCTGGAGATAAAACTCCCCTACCCAAGGGTGTCCCTTTCTTGTTTACAAGGAAAGGTAGAAA' +
    'GGCTGAAATCGATCAGATCTGCACCTCAGGCACTACAAGGGTCTGCTCGTGTAAAGGTGACTCATGGAGT' +
    'CTGAGGCTAAAGTAGACAGGCCGTAAACTTGACTGAAGGTGAGCCCTACTCCACACATGGCCCAAACAAG' +
    'AGCTCCTATCAGCAGCCAGTCACACCCAACCTCTTCAGTAACAATAACTCCAGGATAAGCACCATTTTTT' +
    'ACCCCCCCAGCCATGCCTAACCTTAAGGCCAAGTTCCTGGGTCCGACTGTGATCCAAGTCCCCAGAGGGG' +
    'CTGATATGTTTTTTTTTTTGGGGGGGGGCTGATTTTCACGCATCACTGGTGTACAGACAGTGATGGCATG' +
    'AAGCAAGTGTCGGGACACAGGCCAGGCCTAGGTGACCTACATGACAAGGGCCAGGCCGAAACAATCCAGG' +
    'CCGGTTTCTGATTCTTGCAATTCTGGGTTCTAGTCCACACTGCGTCGTGCTTCTCAGGAGGCCCGGCAGC' +
    'CATCACCACCTTTGGCAGGCAGGGTGGCTACCCTACATGTTCCCAATTCCCTTCACTGCTGCCTCTGCCA' +
    'GCCCAGCCAAGTCCCTTCACTTACCTCCTCGGGAGTTGGTTCCACCTTCTCCAACTTCACGGCATTGGGG' +
    'CGGTCGGCACAGGGCTCAGAGGAGGTTCCCTCTGAGTTGCTTTCCACTCGTGCTCCTGCCTGGCCCTCAG' +
    'GCTGCAAAGTCTCCACGCCAACTTGGGGGACTAGGCCCAGTCCAACCTGAGGTCCACAGTATGCCATCCC' +
    'TCCGCAGAACTCGTATGCGGGCGGACATGGGGAGATCCCCAATACCTCTGAGCCTGGTCCGATTCCAGGC' +
    'CCACCTGGAGGCCCTTGGAAGCTTAGCCAGGTTCGAGGATCCACCCAGCCCGGCTCCAGCCCTGCTGACC' +
    'CATCACCCCCACCTGGTGGGGGTGAGAAGGCGAAGTCTGAAGCCAGGTGTCCAGCCATGGGGAAGGTGGG' +
    'CACCCCGAGCCGGGGGCCTGGTGGAAAGACGGCTCACCTAGGGACGGTTTCACCTC';

    // Oct 4 with acceptable non-base characters 
    var oct4Dirty =
        '1 gaggtgaaac cgtccctagg tgagccgtct ttccaccagg cccccggctc ggggtgccca' +
       '61 ccttccccat ggctggacac ctggcttcag acttcgcctt ctcaccccca ccaggtgggg' +
      '121 gtgatgggtc agcagggctg gagccgggct gggtggatcc tcgaacctgg ctaagcttcc' +
      '181 aagggcctcc aggtgggcct ggaatcggac caggctcaga ggtattgggg atctccccat' +
      '241 gtccgcccgc atacgagttc tgcggaggga tggcatactg tggacctcag gttggactgg' +
      '301 gcctagtccc ccaagttggc gtggagactt tgcagcctga gggccaggca ggagcacgag' +
      '361 tggaaagcaa ctcagaggga acctcctctg agccctgtgc cgaccgcccc aatgccgtga' +
      '421 agttggagaa ggtggaacca actcccgagg aggtaagtga agggacttgg ctgggctggc' +
      '481 agaggcagca gtgaagggaa ttgggaacat gtagggtagc caccctgcct gccaaaggtg' +
      '541 gtgatggctg ccgggcctcc tgagaagcac gacgcagtgt ggactagaac ccagaattgc' +
      '601 aagaatcaga aaccggcctg gattgtttcg gcctggccct tgtcatgtag gtcacctagg' +
      '661 cctggcctgt gtcccgacac ttgcttcatg ccatcactgt ctgtacacca gtgatgcgtg' +
      '721 aaaatcagcc cccccccaaa aaaaaaaaca tatcagcccc tctggggact tggatcacag' +
      '781 tcggacccag gaacttggcc ttaaggttag gcatggctgg gggggtaaaa aatggtgctt' +
      '841 atcctggagt tattgttact gaagaggttg ggtgtgactg gctgctgata ggagctcttg' +
      '901 tttgggccat gtgtggagta gggctcacct tcagtcaagt ttacggcctg tctactttag' +
      '961 cctcagactc catgagtcac ctttacacga gcagaccctt gtagtgcctg aggtgcagat' +
     '1021 ctgatcgatt tcagcctttc tacctttcct tgtaaacaag aaagggacac ccttgggtag' +
     '1081 gggagtttta tctccaggcc atcttaagat cattctgtga gtgcacgggc cttgcttagt' +
     '1141 gtctgatggc ctacagccag cactctggag caagtgtaag caattagcct taagaacaag' +
     '1201 gtgcgagtgg ataccgatgc ccgccgggag ttccgacagc ttagcgattg ttgtagcagg' +
     '1261 agtcccctcc ctaagtgcca gtttctgtgt tatctcaggt cctgtatgcc gccgggagtc' +
     '1321 ccctaggaag gcattaatag tttatctcac atcttaaatg gcccttaatg aagcaagaga' +
     '1381 tttgaacctt agttaagcta atcccaaatc ctcaaaatag gatttagaaa agccaaagac' +
     '1441 actgctgagg gcgattacaa gttttggtct tttgaggagc agttggagat gaaagtctgt' +
     '1501 ctgaagccga gagaatcctt ttccattgaa atggcattga ggtgtgcctc actggctgct' +
     '1561 gcttctgtct gtgccctggg ttggccagcc tttgtggagc acctcagccc tccatcctgg' +
     '1621 acctttgctc caacaacctg ctcctcttcc gccctcaagg ctgacttgca tctccccaga' +
     '1681 tgactgcctc catttctgtc ttctgttaga gacagaaaag cctgagaaac cgacagccat' +
     '1741 tttggggggg gggggtccgg ttcacacgct gcaacttaga aagcacactc aactggccat' +
     '1801 ctgttatacc ctccccacct ggtcccaacc atcactgtgt actactgaga agaaggcagc' +
     '1861 cttagccaca ccctcgagtg cccctgccgt tctattgctc atacatcgat tgatatccct' +
     '1921 gtttcaactt tgaaaaaaaa aaattttttt ttttttgtgg tgtgtgcatg cctgctactg' +
     '1981 tacacctgtg ggcgtcagag gtggtcctct gcaccctccg gccagtaccg catccagggt' +
     '2041 gagtcagatg atttcctgtg gtttgggcct caaggcttct cacctccaga ggcttctagc' +
     '2101 ctgctgcctt gctttctctg tcgcactcta gtacagcagg agttttcttc gcactccgga' +
     '2161 gtgttgtcag ctcctggggc atggacattt ggctacttag agtgtgctgt gtaggttttc' +
     '2221 atttagagct gaacagaggg atggatctta ttaccccagc ccttgagaca ctgaggcagg' +
     '2281 agagcttcct agtgagtccc tgtttcaata tcttcactaa tactgtgtca tactttggga' +
     '2341 ctttctttct tcctttcttt cttttgattt tttttttttt tatatgagta cagtgtacct' +
     '2401 gtcttcagac acacaccaga agagggcatc agatcctact acagaaggtt gtgagccacc' +
     '2461 ttgtggttgc tgggaattga actccggatc tccggaagag aagtccgtat accaacttct' +
     '2521 gtattagtca gggttctcta gagtcacaga acttatggac agtctctaga tagtaaagga' +
     '2581 atttattgat gacttacagt cggcagccca attcccaaca atggttcagt cgcagctgtg' +
     '2641 aatggaagtc caaggatcta gcagttactt agtctcacgc agcaagcagg cgaaggagca' +
     '2701 agagctagag cttaactgct gagccatgtg tttcttgagt aaagggatta catgctcgtt' +
     '2761 cgtctggtca attctgcagc cttaaaactt cttcagaata gggtgacatt ttgtcctcag' +
     '2821 tggggcggtt ttgagtaatc tgtgagcaga taggaacttg ctggggtact gcacagaact' +
     '2881 ctgggtagtg tggtactgta gatggctagg ttctgggggg ggaaagagcc atctatgtca' +
     '2941 cctaggaata gagtgaataa catttatata atcagaccag cccttgagga ggctgagatc' +
     '3001 ttttcatggg gcaccctagg gtcacagtcc cagctggtgt gactctgaca agtctgcctt' +
     '3061 tctcactaca gtcccaggac atgaaagccc tgcagaagga gctagaacag tttgccaagc' +
     '3121 tgctgaagca gaagaggatc accttggggt acacccaggc cgacgtgggg ctcaccctgg' +
     '3181 gcgttctctt tggtgggtct cccccagcat gttctgatct cacggctctt aatgtaggcg' +
     '3241 caagggggtg gggcatctta ggagctgctt ctccacaggt aagggaggat tagacgcttg' +
     '3301 tagcttgaac tgtcagaggt gggggcttgg gctcccttct tgctgcctca ctcactctgt' +
     '3361 ttgatcggcc tttcaggaaa ggtgttcagc cagaccacca tctgtcgctt cgaggccttg' +
     '3421 cagctcagcc ttaagaacat gtgtaagctg cggcccctgc tggagaagtg ggtggaggaa' +
     '3481 gccgacaaca atgagaacct tcaggaggtg aggagtggca ggatgtgtgc aatgtctgcc' +
     '3541 aggcacagtc ccttctgctg cttccattcc tggcttgaaa ctcctccctc tccaaccgga' +
     '3601 gctcgcagga gaagttctgt gtccttattc tgctgctatg aattggaatc cagagcctta' +
     '3661 acatttgcta atcaatcagg ctctctcctt ctgagtcacc ctctgccccc accagcctga' +
     '3721 caatggtccc tccccagaac cccgtctagt gctggtgaag gctcagacct aggtctacca' +
     '3781 gccccttcca gagccccttt cagtaacccc tggctctggg gccacatcca gtcaatgctc' +
     '3841 ccttagcaca atcccttagc ggtttgttct tcagtcccat ctcaaggtgg ggctgttgcc' +
     '3901 aagtcaaata ctaaagttgc tcttgtcgcc cccatcttcc cctgcccaga tatgcaaatc' +
     '3961 ggagaccctg gtgcaggccc ggaagagaaa gcgaactagc attgagaacc gtgtgaggtg' +
     '4021 gagtctggag accatgtttc tgaagtgccc gaagccctcc ctacagcaga tcactcacat' +
     '4081 cgccaatcag cttgggctag agaaggatgt gagtgccaag atcctgccct gtggtacctg' +
     '4141 gatgtttccc tgttcccatt ccccaccccc cccacccccc cacccccacc gccgccaccg' +
     '4201 ctgactgcag catcccagag cttatgatct gatgtccatc tctgtgccca tcctaggtgg' +
     '4261 ttcgagtatg gttctgtaac cggcgccaga agggcaaaag atcaagtatt gagtattccc' +
     '4321 aacgagaaga gtatgaggct acagggacac ctttcccagg gggggctgta tcctttcctc' +
     '4381 tgcccccagg tccccacttt ggcaccccag gctatggaag cccccacttc accacactct' +
     '4441 actcagtccc ttttcctgag ggcgaggcct ttccctctgt tcccgtcact gctctgggct' +
     '4501 ctcccatgca ttcaaactga ggcaccagcc ctccctgggg atgctgtgag ccaaggcaag' +
     '4561 ggaggtagac aagagaacct ggagctttgg ggttaaattc ttttactgag gagggattaa' +
     '4621 aagcacaaca ggggtggggg gtgggatggg gaaagaagct cagtgatgct gttgatcagg' +
     '4681 agcctggcct gtctgtcact catcattttg ttcttaaata aagactggga cacacagtag' +
     '4741 atagct';

    var functions = window.sequenceFunctions;

    describe('reverse', function() {
        
        it('Exists and is a function', function() {
            assert.isFunction(functions.getReverse);
        });

        it('Handles empty string', function() {
            var target = '';
            var actual = functions.getReverse('');
            assert.equal(actual, target);
        });

        it('Returns same value for single character', function() {
            var target = 'a';
            var toReverse = 'a';
            var actual = functions.getReverse(toReverse);
            assert.equal(
                actual,
                target);
        });

        it('Reverses short sequence', function() {
            var toReverse = 'this should be reversed quite easily';
            var target = 'ylisae etiuq desrever eb dluohs siht';
            var actual = functions.getReverse(toReverse);
            assert.equal(
                actual,
                target);
        });

    });

    describe('getComplementMap', function() {

        it('Exists and is a function', function() {
            assert.isFunction(functions.getComplementMap);
        });

        it('Returns object with correct complement pairs', function() {
            // We just want to make sure that we have all the keys pairing to
            // the right values. We are going to keep case the same and for the
            // time being just never produce a u. We can consume u, however,
            // just matching it to t.
            var map = functions.getComplementMap();
            // This function will just assert that base is equal to the
            // complement as produced by map.
            var assertBaseToComplement = function(base, complement) {
                var target = complement;
                var actual = map[base];
                assert.equal(
                    actual,
                    target,
                    base + ' should pair with ' + complement);
            };
            assertBaseToComplement('a', 't');
            assertBaseToComplement('t', 'a');
            assertBaseToComplement('c', 'g');
            assertBaseToComplement('g', 'c');
            assertBaseToComplement('A', 'T');
            assertBaseToComplement('T', 'A');
            assertBaseToComplement('C', 'G');
            assertBaseToComplement('G', 'C');
            assertBaseToComplement('u', 'a');
            assertBaseToComplement('U', 'A');
        });

    });

    describe('getComplement', function() {

        it('Is function', function() {
            assert.isFunction(functions.getComplement);
        });

        it('Handles empty string', function() {
            var target = '';
            var actual = functions.getComplement('');
            assert.equal(actual, target);
        });

        it('Returns correct response in event of invalid base', function() {
            var original = sequenceWithInvalidBase;
            var actual = functions.getComplement(original);
            var target = 'unrecognized base: f';
            assert.equal(actual, target);
        });

        it('complements simple string correctly matching case', function() {
            var original = allValidBases;
            var target = 'tagcTAGCaA';
            var actual = functions.getComplement(original);
            assert.equal(
                actual,
                target,
                actual + ' is not complement of ' + original);
        });

        it('complements longer sequence correctly', function() {
            // This isn't stricly necessary and is really just a sanity check.
            // We're going to make sure that with a long sequence we get the
            // real deal.
            var actual = functions.getComplement(oct4);
            assert.equal(
                  actual,
                  oct4Complement,
                  'Did not complement oct4');
        });

    });

    describe('getReverseComplement', function() {

        it('Handles empty string', function() {
            var target = '';
            var actual = functions.getReverseComplement('');
            assert.equal(actual, target);
        });

        it('Returns correct response in event of invalid base', function() {
            var original = sequenceWithInvalidBase;
            var target = 'unrecognized base: f';
            var actual = functions.getReverseComplement(original);
            assert.equal(actual, target);
        });

        it('Handles simple case', function() {
            var original = allValidBases;
            var target = 'AaCGATcgat';
            var actual = functions.getReverseComplement(original);
            assert.equal(
                actual,
                target,
                actual + ' is not reverse complement of ' + original);
        });

        it('Handles larger sequence', function() {
            var actual = functions.getReverseComplement(oct4);
            assert.equal(
                actual,
                oct4ReverseComplement,
                'Did not produce reverse complement of oct4');
        });

        it('Oct4 with valid non bases becomes oct4', function() {
            var actual = functions.getClean(oct4Dirty);
            // We have to lowercase oct4 because the fasta format we pulled
            // oct4 from originally had all caps.
            var target = oct4.toLowerCase();
            assert.equal(actual, target);
        });

    });

    describe('getClean', function() {

        it('exists and is a function', function() {
            assert.isFunction(functions.getClean);
        });

        it('Returns correct response in event of invalid base', function() {
            var original = sequenceWithInvalidBase;
            var target = 'unrecognized base: f';
            var actual = functions.getClean(original);
            assert.equal(actual, target);
        });

        it('accepts empty string', function() {
            var target = '';
            var actual = functions.getClean('');
            assert.equal(actual, target);
        });

        it('does not change valid sequence', function() {
            var target = allValidBases;
            var actual = functions.getClean(allValidBases);
            assert.equal(actual, target, 'should not have changed output');
        });

        it('does not change large sequence', function() {
            assert.equal(functions.getClean(oct4), oct4);
        });

        it('whittle illegal characters down to nothing', function() {
            var original = '\n\t\r 1234567890';
            var target = '';
            var actual = functions.getClean(original);
            assert.equal(actual, target, 'should have been empty string');
        });

    });

    describe('isValidNonBase', function() {

        it('Exists and is a function', function() {
            assert.isFunction(functions.isValidNonBase);
        });

        it('All digits are valid', function() {
            for (var i = 0; i < 10; i++) {
                var isValid = functions.isValidNonBase(i.toString());
                assert.isTrue(isValid);
            }
        });

        it('Newline is valid', function() {
            assert.isTrue(functions.isValidNonBase('\n'));
        });

        it('Tab is valid', function() {
            assert.isTrue(functions.isValidNonBase('\t'));
        });

        it('Carriage return is valid', function() {
            assert.isTrue(functions.isValidNonBase('\r'));
        });

        it('Space is valid', function() {
            assert.isTrue(functions.isValidNonBase(' '));
        });

    });

})();
