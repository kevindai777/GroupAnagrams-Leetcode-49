//Java Solution

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs.length == 0) {
            return new ArrayList();
        }
        
        Map<String, List> result = new HashMap<String, List>();
        for (String str : strs) {
            char[] ca = str.toCharArray();
            Arrays.sort(ca);
            String sorted = String.valueOf(ca);
            
            if (!result.containsKey(sorted)) {
                result.put(sorted, new ArrayList());
            }
            result.get(sorted).add(str);
        }
        
        return new ArrayList(result.values());
    }
}