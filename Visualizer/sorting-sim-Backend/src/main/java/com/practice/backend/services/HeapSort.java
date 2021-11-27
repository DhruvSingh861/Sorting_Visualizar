package com.practice.backend.services;

import java.util.ArrayList;
import java.util.List;

import com.practice.backend.arraydata.SArray;

public class HeapSort {
	private static List<SArray> list;
    public static List<SArray> sort(Integer[] a){
    	list=new ArrayList();
        int N=a.length-1;
        for(int i=N/2;i>=0;i--)
            sink(a,i,N);
            while(N>0){
            	list.add(new SArray(0,N,true,true));
                //System.out.println(0+" "+a[0]+"-"+(N)+" "+a[N]);
                exch(a,0,N--);
                sink(a,0,N);
            }
            System.out.println(list);
        return list;
    }
    public static void sink(Integer[] a,int k,int N){
        while(2*k+1<=N){
         int j=2*k+1;
         if(j<N && less(a,j,j+1)) j++;
         if(!less(a,k,j)){
        	 list.add(new SArray(k,j,false,false));
        	 break;
         }
         list.add(new SArray(k,j,true,false));
            //System.out.println(k+" "+a[k]+"-"+j+" "+a[j]);
             exch(a,k,j);
             k=j;
        }
    }
private static void exch(Integer[] a,int i, int j) {
Integer temp = a[i];
a[i] = a[j];
a[j] = temp;
}

private static boolean less(Integer[] a,int x, int y) {
return a[x].compareTo(a[y]) < 0;
}
 public static void show(Integer[] a) { 
        for (int i = 0; i <a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }
}

