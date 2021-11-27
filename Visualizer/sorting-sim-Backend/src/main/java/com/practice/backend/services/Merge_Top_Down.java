package com.practice.backend.services;

import java.util.ArrayList;
import java.util.List;

import com.practice.backend.arraydata.SArray;

public class Merge_Top_Down {
    private static Integer aux[];
    static List<SArray> list;
    public static void merge(Integer a[],int lo, int mid,int hi){
        int i=lo, j=mid+1;
        for(int k=lo;k<=hi;k++)
           aux[k]=a[k];
        if(lo==0 && hi==a.length-1) list.add(null);
        for(int k=lo;k<=hi;k++){
            if(i>mid)                    a[k]=aux[j++];
            else if(j>hi)                a[k]=aux[i++];
            else if(less(aux[j],aux[i])){
                //System.out.println(aux[j]+"-"+aux[i]+"change");
            	list.add(new SArray(k,j,true,false));
                a[k]=aux[j++];
            }
            else{
                //System.out.println(aux[j]+"-"+aux[i]);
            	list.add(new SArray(k,j,false,false));
            	a[k]=aux[i++];
            }
        }
    }
    
    public List<SArray> sort(Integer[] a){
        list=new ArrayList();
    	aux=new Integer[a.length];
        sort(a,0,a.length-1);
        System.out.print("Sorted("+(a.length)+")=> ");
        for(int i=0;i<a.length;i++)
        System.out.print(a[i]+", ");
        return list;
    }
    
    private void sort(Integer a[],int lo, int hi){
        if(lo>=hi) return;
        int mid=(lo+hi)/2;
        sort(a,lo,mid);
        sort(a,mid+1,hi);
        merge(a,lo,mid,hi);
    }
    
    
    private static boolean less(Integer x, int y) {
        return x.compareTo(y) < 0;
    }
    
    
     public static void show(Integer[] a) {
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }
}
