/* global describe, it, assert */

(function() {
    'use strict';

    var allValidBases = 'atcgATCGuU';
    // A sequence with a single invalid base: f.
    var sequenceWithInvalidBase = 'atcfccgg';

    var unrecognizedBaseResponseF = 'unrecognized base: f';

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

    var oct4Reversed =
    'TCGATAGATGACACACAGGGTCAGAAATAAATTCTTGTTTTACTACTCACTGTCTG' +
    'TCCGGTCCGAGGACTAGTTGTCGTAGTGACTCGAAGAAAGGGGTAGGGTGGGGGGTGGGGACAACACGAA' +
    'AATTAGGGAGGAGTCATTTTCTTAAATTGGGGTTTCGAGGTCCAAGAGAACAGATGGAGGGAACGGAACC' +
    'GAGTGTCGTAGGGGTCCCTCCCGACCACGGAGTCAAACTTACGTACCCTCTCGGGTCTCGTCACTGCCCT' +
    'TGTCTCCCTTTCCGGAGCGGGAGTCCTTTTCCCTGACTCATCTCACACCACTTCACCCCCGAAGGTATCG' +
    'GACCCCACGGTTTCACCCCTGGACCCCCGTCTCCTTTCCTATGTCGGGGGGGACCCTTTCCACAGGGACA' +
    'TCGGAGTATGAGAAGAGCAACCCTTATGAGTTATGAACTAGAAAACGGGAAGACCGCGGCCAATGTCTTG' +
    'GTATGAGCTTGGTGGATCCTACCCGTGTCTCTACCTGTAGTCTAGTATTCGAGACCCTACGACGTCAGTC' +
    'GCCACCGCCGCCACCCCCACCCCCCCACCCCCCCCACCCCTTACCCTTGTCCCTTTGTAGGTCCATGGTG' +
    'TCCCGTCCTAGAACCGTGAGTGTAGGAAGAGATCGGGTTCGACTAACCGCTACACTCACTAGACGACATC' +
    'CCTCCCGAAGCCCGTGAAGTCTTTGTACCAGAGGTCTGAGGTGGAGTGTGCCAAGAGTTACGATCAAGCG' +
    'AAAGAGAAGGCCCGGACGTGGTCCCAGAGGCTAAACGTATAGACCCGTCCCCTTCTACCCCCGCTGTTCT' +
    'CGTTGAAATCATAAACTGAACCGTTGTCGGGGTGGAACTCTACCCTGACTTCTTGTTTGGCGATTCCCTA' +
    'ACACGATTCCCTCGTAACTGACCTACACCGGGGTCTCGGTCCCCAATGACTTTCCCCGAGACCTTCCCCG' +
    'ACCATCTGGATCCAGACTCGGAAGTGGTCGTGATCTGCCCCAAGACCCCTCCCTGGTAACAGTCCGACCA' +
    'CCCCCGTCTCCCACTGAGTCTTCCTCTCTCGGACTAACTAATCGTTTACAATTCCGAGACCTAAGGTTAA' +
    'GTATCGTCGTCTTATTCCTGTGTCTTGAAGAGGACGCTCGAGGCCAACCTCTCCCTCCTCAAAGTTCGGT' +
    'CCTTACCTTCGTCGTCTTCCCTGACACGGACCGTCTGTAACGTGTGTAGGACGGTGAGGAGTGGAGGACT' +
    'TCCAAGAGTAACAACAGCCGAAGGAGGTGGGTGAAGAGGTCGTCCCCGGCGTCGAATGTGTACAAGAATT' +
    'CCGACTCGACGTTCCGGAGCTTCGCTGTCTACCACCAGACCGACTTGTGGAAAGGACTTTCCGGCTAGTT' +
    'TGTCTCACTCACTCCGTCGTTCTTCCCTCGGGTTCGGGGGTGGAGACTGTCAAGTTCGATGTTCGCAGAT' +
    'TAGGAGGGAATGGACACCTCTTCGTCGAGGATTCTACGGGGTGGGGGAACGCGGATGTAATTCTCGGCAC' +
    'TCTAGTCTTGTACGACCCCCTCTGGGTGGTTTCTCTTGCGGGTCCCACTCGGGGTGCAGCCGGACCCACA' +
    'TGGGGTTCCACTAGGAGAAGACGAAGTCGTCGAACCGTTTGACAAGATCGAGGAAGACGTCCCGAAAGTA' +
    'CAGGACCCTGACATCACTCTTTCCGTCTGAACAGTCTCAGTGTGGTCGACCCTGACACTGGGATCCCACG' +
    'GGGTACTTTTCTAGAGTCGGAGGAGTTCCCGACCAGACTAATATATTTACAATAAGTGAGATAAGGATCC' +
    'ACTGTATCTACCGAGAAAGGGGGGGGTCTTGGATCGGTAGATGTCATGGTGTGATGGGTCTCAAGACACG' +
    'TCATGGGGTCGTTCAAGGATAGACGAGTGTCTAATGAGTTTTGGCGGGGTGACTCCTGTTTTACAGTGGG' +
    'ATAAGACTTCTTCAAAATTCCGACGTCTTAACTGGTCTGCTTGCTCGTACATTAGGGAAATGAGTTCTTT' +
    'GTGTACCGAGTCGTCAATTCGAGATCGAGAACGAGGAAGCGGACGAACGACGCACTCTGATTCATTGACG' +
    'ATCTAGGAACCTGAAGGTAAGTGTCGACGCTGACTTGGTAACAACCCTTAACCCGACGGCTGACATTCAG' +
    'TAGTTATTTAAGGAAATGATAGATCTCTGACAGGTATTCAAGACACTGAGATCTCTTGGGACTGATTATG' +
    'TCTTCAACCATATGCCTGAAGAGAAGGCCTCTAGGCCTCAAGTTAAGGGTCGTTGGTGTTCCACCGAGTG' +
    'TTGGAAGACATCATCCTAGACTACGGGAGAAGACCACACACAGACTTCTGTCCATGTGACATGAGTATAT' +
    'TTTTTTTTTTTTTAGTTTTCTTTCTTTCCTTCTTTCTTTCAGGGTTTCATACTGTGTCATAATCACTTCT' +
    'ATAACTTTGTCCCTGAGTGATCCTTCGAGAGGACGGAGTCACAGAGTTCCCGACCCCATTATTCTAGGTA' +
    'GGGAGACAAGTCGAGATTTACTTTTGGATGTGTCGTGTGAGATTCATCGGTTTACAGGTACGGGGTCCTC' +
    'GACTGTTGTGAGGCCTCACGCTTCTTTTGAGGACGACATGATCTCACGCTGTCTCTTTCGTTCCGTCGTC' +
    'CGATCTTCGGAGACCTCCACTCTTCGGAACTCCGGGTTTGGTGTCCTTTAGTAGACTGAGTGGGACCTAC' +
    'GCCATGACCGGCCTCCCACGTCTCCTGGTGGAGACTGCGGGTGTCCACATGTCATCGTCCGTACGTGTGT' +
    'GGTGTTTTTTTTTTTTTAAAAAAAAAAAGTTTCAACTTTGTCCCTATAGTTAGCTACATACTCGTTATCT' +
    'TGCCGTCCCCGTGAGCTCCCACACCGATTCCGACGGAAGAAGAGTCATCATGTGTCACTACCAACCCTGG' +
    'TCCACCCCTCCCATATTGTCTACCGGTCAACTCACACGAAAGATTCAACGTCGCACACTTGGCCTGGGGG' +
    'GGGGGGGTTTTACCGACAGCCAAAGAGTCCGAAAAGACAGAGATTGTCTTCTGTCTTTACCTCCGTCAGT' +
    'AGACCCCTCTACGTTCAGTCGGAACTCCCGCCTTCTCCTCGTCCAACAACCTCGTTTCCAGGTCCTACCT' +
    'CCCGACTCCACGAGGTGTTTCCGACCGGTTGGGTCCCGTGTCTGTCTTCGTCGTCGGTCACTCCGTGTGG' +
    'AGTTACGGTAAAGTTACCTTTTCCTAAGAGAGCCGAAGTCTGTCTGAAAGTAGAGGTTGACGAGGAGTTT' +
    'TCTGGTTTTGAACATTAGCGGGAGTCGTCACAGAAACCGAAAAGATTTAGGATAAAACTCCTAAACCCTA' +
    'ATCGAATTGATTCCAAGTTTAGAGAACGAAGTAATTCCCGGTAAATTCTACACTCTATTTGATAATTACG' +
    'GAAGGATCCCCTGAGGGCCGCCGTATGTCCTGGACTCTATTGTGTCTTTGACCGTGAATCCCTCCCCTGA' +
    'GGACGATGTTGTTAGCGATTCGACAGCCTTGAGGGCCGCCCGTAGCCATAGGTGAGCGTGGAACAAGAAT' +
    'TCCGATTAACGAATGTGAACGAGGTCTCACGACCGACATCCGGTAGTCTGTGATTCGTTCCGGGCACGTG' +
    'AGTGTCTTACTAGAATTCTACCGGACCTCTATTTTGAGGGGATGGGTTCCCACAGGGAAAGAACAAATGT' +
    'TCCTTTCCATCTTTCCGACTTTAGCTAGTCTAGACGTGGAGTCCGTGATGTTCCCAGACGAGCACATTTC' +
    'CACTGAGTACCTCAGACTCCGATTTCATCTGTCCGGCATTTGAACTGACTTCCACTCGGGATGAGGTGTG' +
    'TACCGGGTTTGTTCTCGAGGATAGTCGTCGGTCAGTGTGGGTTGGAGAAGTCATTGTTATTGAGGTCCTA' +
    'TTCGTGGTAAAAAATGGGGGGGTCGGTACGGATTGGAATTCCGGTTCAAGGACCCAGGCTGACACTAGGT' +
    'TCAGGGGTCTCCCCGACTATACAAAAAAAAAAACCCCCCCCCGACTAAAAGTGCGTAGTGACCACATGTC' +
    'TGTCACTACCGTACTTCGTTCACAGCCCTGTGTCCGGTCCGGATCCACTGGATGTACTGTTCCCGGTCCG' +
    'GCTTTGTTAGGTCCGGCCAAAGACTAAGAACGTTAAGACCCAAGATCAGGTGTGACGCAGCACGAAGAGT' +
    'CCTCCGGGCCGTCGGTAGTGGTGGAAACCGTCCGTCCCACCGATGGGATGTACAAGGGTTAAGGGAAGTG' +
    'ACGACGGAGACGGTCGGGTCGGTTCAGGGAAGTGAATGGAGGAGCCCTCAACCAAGGTGGAAGAGGTTGA' +
    'AGTGCCGTAACCCCGCCAGCCGTGTCCCGAGTCTCCTCCAAGGGAGACTCAACGAAAGGTGAGCACGAGG' +
    'ACGGACCGGGAGTCCGACGTTTCAGAGGTGCGGTTGAACCCCCTGATCCGGGTCAGGTTGGACTCCAGGT' +
    'GTCATACGGTAGGGAGGCGTCTTGAGCATACGCCCGCCTGTACCCCTCTAGGGGTTATGGAGACTCGGAC' +
    'CAGGCTAAGGTCCGGGTGGACCTCCGGGAACCTTCGAATCGGTCCAAGCTCCTAGGTGGGTCGGGCCGAG' +
    'GTCGGGACGACTGGGTAGTGGGGGTGGACCACCCCCACTCTTCCGCTTCAGACTTCGGTCCACAGGTCGG' +
    'TACCCCTTCCACCCGTGGGGCTCGGCCCCCGGACCACCTTTCTGCCGAGTGGATCCCTGCCAAAGTGGAG';

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
        '1gaggtgaaaccgtccctaggtgagccgtctttccaccaggcccccggctcggggtgccca' +
       '61ccttccccatggctggacacctggcttcagacttcgccttctcacccccaccaggtgggg' +
      '121gtgatgggtcagcagggctggagccgggctgggtggatcctcgaacctggctaagcttcc' +
      '181aagggcctccaggtgggcctggaatcggaccaggctcagaggtattggggatctccccat' +
      '241gtccgcccgcatacgagttctgcggagggatggcatactgtggacctcaggttggactgg' +
      '301gcctagtcccccaagttggcgtggagactttgcagcctgagggccaggcaggagcacgag' +
      '361tggaaagcaactcagagggaacctcctctgagccctgtgccgaccgccccaatgccgtga' +
      '421agttggagaaggtggaaccaactcccgaggaggtaagtgaagggacttggctgggctggc' +
      '481agaggcagcagtgaagggaattgggaacatgtagggtagccaccctgcctgccaaaggtg' +
      '541gtgatggctgccgggcctcctgagaagcacgacgcagtgtggactagaacccagaattgc' +
      '601aagaatcagaaaccggcctggattgtttcggcctggcccttgtcatgtaggtcacctagg' +
      '661cctggcctgtgtcccgacacttgcttcatgccatcactgtctgtacaccagtgatgcgtg' +
      '721aaaatcagcccccccccaaaaaaaaaaacatatcagcccctctggggacttggatcacag' +
      '781tcggacccaggaacttggccttaaggttaggcatggctgggggggtaaaaaatggtgctt' +
      '841atcctggagttattgttactgaagaggttgggtgtgactggctgctgataggagctcttg' +
      '901tttgggccatgtgtggagtagggctcaccttcagtcaagtttacggcctgtctactttag' +
      '961cctcagactccatgagtcacctttacacgagcagacccttgtagtgcctgaggtgcagat' +
     '1021ctgatcgatttcagcctttctacctttccttgtaaacaagaaagggacacccttgggtag' +
     '1081gggagttttatctccaggccatcttaagatcattctgtgagtgcacgggccttgcttagt' +
     '1141gtctgatggcctacagccagcactctggagcaagtgtaagcaattagccttaagaacaag' +
     '1201gtgcgagtggataccgatgcccgccgggagttccgacagcttagcgattgttgtagcagg' +
     '1261agtcccctccctaagtgccagtttctgtgttatctcaggtcctgtatgccgccgggagtc' +
     '1321ccctaggaaggcattaatagtttatctcacatcttaaatggcccttaatgaagcaagaga' +
     '1381tttgaaccttagttaagctaatcccaaatcctcaaaataggatttagaaaagccaaagac' +
     '1441actgctgagggcgattacaagttttggtcttttgaggagcagttggagatgaaagtctgt' +
     '1501ctgaagccgagagaatccttttccattgaaatggcattgaggtgtgcctcactggctgct' +
     '1561gcttctgtctgtgccctgggttggccagcctttgtggagcacctcagccctccatcctgg' +
     '1621acctttgctccaacaacctgctcctcttccgccctcaaggctgacttgcatctccccaga' +
     '1681tgactgcctccatttctgtcttctgttagagacagaaaagcctgagaaaccgacagccat' +
     '1741tttggggggggggggtccggttcacacgctgcaacttagaaagcacactcaactggccat' +
     '1801ctgttataccctccccacctggtcccaaccatcactgtgtactactgagaagaaggcagc' +
     '1861cttagccacaccctcgagtgcccctgccgttctattgctcatacatcgattgatatccct' +
     '1921gtttcaactttgaaaaaaaaaaatttttttttttttgtggtgtgtgcatgcctgctactg' +
     '1981tacacctgtgggcgtcagaggtggtcctctgcaccctccggccagtaccgcatccagggt' +
     '2041gagtcagatgatttcctgtggtttgggcctcaaggcttctcacctccagaggcttctagc' +
     '2101ctgctgccttgctttctctgtcgcactctagtacagcaggagttttcttcgcactccgga' +
     '2161gtgttgtcagctcctggggcatggacatttggctacttagagtgtgctgtgtaggttttc' +
     '2221atttagagctgaacagagggatggatcttattaccccagcccttgagacactgaggcagg' +
     '2281agagcttcctagtgagtccctgtttcaatatcttcactaatactgtgtcatactttggga' +
     '2341ctttctttcttcctttctttcttttgattttttttttttttatatgagtacagtgtacct' +
     '2401gtcttcagacacacaccagaagagggcatcagatcctactacagaaggttgtgagccacc' +
     '2461ttgtggttgctgggaattgaactccggatctccggaagagaagtccgtataccaacttct' +
     '2521gtattagtcagggttctctagagtcacagaacttatggacagtctctagatagtaaagga' +
     '2581atttattgatgacttacagtcggcagcccaattcccaacaatggttcagtcgcagctgtg' +
     '2641aatggaagtccaaggatctagcagttacttagtctcacgcagcaagcaggcgaaggagca' +
     '2701agagctagagcttaactgctgagccatgtgtttcttgagtaaagggattacatgctcgtt' +
     '2761cgtctggtcaattctgcagccttaaaacttcttcagaatagggtgacattttgtcctcag' +
     '2821tggggcggttttgagtaatctgtgagcagataggaacttgctggggtactgcacagaact' +
     '2881ctgggtagtgtggtactgtagatggctaggttctggggggggaaagagccatctatgtca' +
     '2941cctaggaatagagtgaataacatttatataatcagaccagcccttgaggaggctgagatc' +
     '3001ttttcatggggcaccctagggtcacagtcccagctggtgtgactctgacaagtctgcctt' +
     '3061tctcactacagtcccaggacatgaaagccctgcagaaggagctagaacagtttgccaagc' +
     '3121tgctgaagcagaagaggatcaccttggggtacacccaggccgacgtggggctcaccctgg' +
     '3181gcgttctctttggtgggtctcccccagcatgttctgatctcacggctcttaatgtaggcg' +
     '3241caagggggtggggcatcttaggagctgcttctccacaggtaagggaggattagacgcttg' +
     '3301tagcttgaactgtcagaggtgggggcttgggctcccttcttgctgcctcactcactctgt' +
     '3361ttgatcggcctttcaggaaaggtgttcagccagaccaccatctgtcgcttcgaggccttg' +
     '3421cagctcagccttaagaacatgtgtaagctgcggcccctgctggagaagtgggtggaggaa' +
     '3481gccgacaacaatgagaaccttcaggaggtgaggagtggcaggatgtgtgcaatgtctgcc' +
     '3541aggcacagtcccttctgctgcttccattcctggcttgaaactcctccctctccaaccgga' +
     '3601gctcgcaggagaagttctgtgtccttattctgctgctatgaattggaatccagagcctta' +
     '3661acatttgctaatcaatcaggctctctccttctgagtcaccctctgcccccaccagcctga' +
     '3721caatggtccctccccagaaccccgtctagtgctggtgaaggctcagacctaggtctacca' +
     '3781gccccttccagagcccctttcagtaacccctggctctggggccacatccagtcaatgctc' +
     '3841ccttagcacaatcccttagcggtttgttcttcagtcccatctcaaggtggggctgttgcc' +
     '3901aagtcaaatactaaagttgctcttgtcgcccccatcttcccctgcccagatatgcaaatc' +
     '3961ggagaccctggtgcaggcccggaagagaaagcgaactagcattgagaaccgtgtgaggtg' +
     '4021gagtctggagaccatgtttctgaagtgcccgaagccctccctacagcagatcactcacat' +
     '4081cgccaatcagcttgggctagagaaggatgtgagtgccaagatcctgccctgtggtacctg' +
     '4141gatgtttccctgttcccattccccaccccccccacccccccacccccaccgccgccaccg' +
     '4201ctgactgcagcatcccagagcttatgatctgatgtccatctctgtgcccatcctaggtgg' +
     '4261ttcgagtatggttctgtaaccggcgccagaagggcaaaagatcaagtattgagtattccc' +
     '4321aacgagaagagtatgaggctacagggacacctttcccagggggggctgtatcctttcctc' +
     '4381tgcccccaggtccccactttggcaccccaggctatggaagcccccacttcaccacactct' +
     '4441actcagtcccttttcctgagggcgaggcctttccctctgttcccgtcactgctctgggct' +
     '4501ctcccatgcattcaaactgaggcaccagccctccctggggatgctgtgagccaaggcaag' +
     '4561ggaggtagacaagagaacctggagctttggggttaaattcttttactgaggagggattaa' +
     '4621aagcacaacaggggtggggggtgggatggggaaagaagctcagtgatgctgttgatcagg' +
     '4681agcctggcctgtctgtcactcatcattttgttcttaaataaagactgggacacacagtag' +
     '4741atagct';

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
            var toReverse = allValidBases;
            var target = 'UuGCTAgcta';
            var actual = functions.getReverse(toReverse);
            assert.equal(
                actual,
                target);
        });

        it('Reverses and cleans big sequence', function() {
            var target = oct4Reversed.toLowerCase();
            var actual = functions.getReverse(oct4Dirty);
            assert.equal(
                actual,
                target,
                'did not reverse oct4 correctly');
        });

        it('Reverse cleans', function() {
            var toReverse = allValidBases + '\n\t\r 1234567890';
            var target = ' \r\t\nUuGCTAgcta';
            var actual = functions.getReverse(toReverse);
            assert.equal(actual, target);
        });

        it('Returns correct response in event of invalid base', function() {
            var target = unrecognizedBaseResponseF;
            var actual = functions.getReverse(sequenceWithInvalidBase);
            assert.equal(actual, target);
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
            var target = unrecognizedBaseResponseF;
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
            var target = unrecognizedBaseResponseF;
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
            var target = unrecognizedBaseResponseF;
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

        it('whittle valid nonbases down to whitespace', function() {
            var original = '\n\t\r 1234567890';
            var target = '\n\t\r ';
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

    describe('isDigit', function() {

        it('Exists and is function', function() {
            assert.isFunction(functions.isDigit);
        });

        it('Returns true for all digits', function() {
            for (var i = 0; i < 10; i++) {
                assert.isTrue(functions.isDigit(i.toString()));
            }
        });

        it('Returns false for whitespace', function() {
            var whitespace = '\n\t\r ';
            for (var i = 0; i < whitespace.length; i++) {
                assert.isFalse(functions.isDigit(whitespace[i]));
            }
        });

        it('Returns false for letters', function() {
            var alphabet = 'abcdefghjiklmnopqrstuvwxyz';
            for (var i = 0; i < alphabet.length; i++) {
                assert.isFalse(functions.isDigit(alphabet[i]));
            }
        });

    });

})();
