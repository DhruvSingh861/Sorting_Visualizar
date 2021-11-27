package com.practice.backend.services;

import java.util.ArrayList;
import java.util.List;

import com.practice.backend.arraydata.SArray;

public class QuickSort {

	private static List<SArray> list;
    public static int partition(Integer[] a, int lo, int hi) {
        int i = lo, j = hi + 1;
        Integer pivot = a[lo];
        while (true) {
            while (less(a[++i], pivot)) {
            	list.add(new SArray(lo,i,false,false));
                if (i == hi) break;
            }
            while (less(pivot, a[--j])) { 
            	list.add(new SArray(lo,j,false,false));
                if (j == lo) break;
            }
            if (i >= j) break;
            list.add(new SArray(i,j,true,false));
            //System.out.println(i+" "+a[i]+"-"+j+" "+a[j]);
            exch(a, i, j);
        }
        list.add(new SArray(j,lo,true,true));
        //System.out.println(j+" "+a[j]+"-"+lo+" "+a[lo]);
        exch(a, j, lo);
        return j;
    }

    public List<SArray> sort(Integer[] a) {
        list=new ArrayList();
        sort(a, 0, a.length - 1);
        return list;
    }

    private static void sort(Integer[] a, int lo, int hi) {
        if (lo < hi) {
            int j = partition(a, lo, hi);
            sort(a, lo, j - 1);
            sort(a, j + 1, hi);
        }
    }

    private static boolean less(Integer x, Integer y) {
        return x.compareTo(y) < 0;
    }

    public static void show(Integer[] a) { 
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }

    private static void exch(Integer[] a, int i, int j) {
        Integer temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}

