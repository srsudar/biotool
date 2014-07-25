/* global describe, it, assert, sequenceFunctions */

(function() {
    'use strict';

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

    var functions = sequenceFunctions;

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

        it('complements simple string correctly matching case', function() {
            var original = 'atcgATCGuU';
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
            assert.equal(target, actual);
        });

        it('Handles simple case', function() {
            var original = 'atcgATCGuU';
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

    });


})();
